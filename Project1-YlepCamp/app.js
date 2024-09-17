// Imports to make this an express project
import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import methodOverride from 'method-override';
import ejsmate from 'ejs-mate';
import Campground from './models/campground.js';
import catchAsync from './utils/catchAsync.js';
import ExpressError from './utils/ExpressError.js';
import campground from './models/campground.js';
import JoiSchema from './schema.js';

// Because we are making this a module the 'require()' for improrts does not work
// Use the url and path from the imports above
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = 3000;
const app = express();
const dbName = 'yelp-camp';

// Create a connection to MongoDB
mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log(`Connected to ${db.name}`);
});

// Tell the express application to use EJS as the view engine
app.engine('ejs', ejsmate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

// Use Joi as middleware so there is less repetition in the code
const validateCampground = (req, res, next) => {
  // Validate the form for any fields that are required and thow an error if invalid submission
  const { error } = JoiSchema.campgroundSchema.validate(req.body);
  
  if (error) {
    const message = error.details.map(el => el.message).join(',');
    throw new ExpressError(message, 400);
  }

  next();
}

// Create the base route for your home page
app.get('/', (req, res) => {
  res.render('home')
})

// Create basic rountes to Campground Views
// Campgrounds index screen - get all campgrounds
app.get('/campgrounds', catchAsync( async (req, res) => {
  const camps = await Campground.find({});
  res.render('campground/index', { camps });
}))

// CRUD Operations
// Create :: Add a new Camp to DB
app.get('/campgrounds/new', (req, res) => {
  console.log(req.body);
  res.render('campground/new');
})

app.post('/campgrounds', validateCampground, catchAsync( async (req, res, next) => {
  console.log(req.body);
  const camp = await Campground.create(req.body.campground);
  res.redirect(`campgrounds/${ camp._id }`);
}))

// Read :: Find a single campground by ID (details page)
app.get('/campgrounds/:id', catchAsync( async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findById(id);
  res.render('campground/show', { camp });
}))

// Update :: Using the Campground ID use an HTML for to update the data
app.get('/campgrounds/:id/edit', catchAsync( async (req, res) => {
  const camp = await Campground.findById(req.params.id);
  console.log(camp);
  res.render('campground/edit', { camp })
}))

app.put('/campgrounds/:id', validateCampground, catchAsync( async(req, res) => {
  console.log(req.params.id)
  console.log(req.body)
  const camp = await Campground.findByIdAndUpdate(req.params.id, req.body);
  res.redirect(camp._id);
}))

app.delete('/campgrounds/:id', catchAsync( async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findByIdAndDelete(id);
  res.redirect('/campgrounds')
}))

app.all('*', (req, res, next) => {
  next(new ExpressError('Page not found', 404))
})

app.use((err, req, res, next) => {
  if(!err.statusCode) err.statusCode = 500;
  if(!err.message) err.message = "Something went wrong.";
  res.status(err.statusCode).render("error", { err });
})

app.listen(port, () => {
  console.log(`Application has started on port ${port}`);
})