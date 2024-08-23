import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import methodOverride from 'method-override';
import mongoose from 'mongoose';
import Product from './models/product.js';
import Categories from './lib/consts.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
const port = 3000



// Mongoose Connection
const applicationDB = "farmShop"
mongoose.connect(`mongodb://127.0.0.1:27017/${applicationDB}`)
    .then(() => {
        console.log(`Mongo connection open to: ${applicationDB}`)
    })
    .catch(err => {
        console.log(`Could not connect to ${applicationDB}`)
        console.log(err)
    })

// This will point to our directory for "views" and setup our project to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})

// Test route to ensure application is running
app.get('/test', async (req, res) => {
    res.render('test');
});

// Render main page (Read route)
app.get('/shop', async (req, res) => {
    const products = await Product.find({});
    res.render('shop/index', { products });
});

// Create Routes
app.get('/shop/new', (req, res) => {
    res.render('shop/newItem', { Categories })
})

app.post('/shop', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.redirect('/shop');
})

// Read Routes
app.get('/shop/:id', async (req, res) => {
    console.log("Line36:GET ", req.body)
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('shop/item', { product });
})

// Update Routes
app.get('/shop/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('shop/editItem', { product, Categories});
})

app.put('/shop/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true})
    console.log(product)
    res.redirect('/shop')
})