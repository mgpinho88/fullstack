import mongoose from 'mongoose';
import seedHelper from './seedHelpers.js';
import cities from './cities.js';
import Campground from '../models/campground.js'
const { Schema } = mongoose;
const dbName = "yelp-camp";

mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const camp = new Campground({
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(seedHelper.descriptors)} ${sample(seedHelper.places)}`
        })
        console.log(camp);
        await camp.save();
    }
}

seedDB().then(() => mongoose.connection.close());