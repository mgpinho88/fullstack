// This file will initialize our DB with dummy data so that we can have something to work with
import mongoose from 'mongoose';
import Product from './models/product.js';
const applicationDB = "farmShop"


// Mongoose Connection
mongoose.connect(`mongodb://127.0.0.1:27017/${applicationDB}`)
    .then(() => {
        console.log(`Mongo connection open to: ${applicationDB}`)
    })
    .catch(err => {
        console.log(`Could not connect to ${applicationDB}`)
        console.log(err)
    });

const productSeeds = [
    {
        name: "Grapefruit",
        price: 1.99,
        type: "FRUIT"
    },
    {
        name: "Eggplant",
        price: 0.99,
        type: "VEGETABLE"
    },
    {
        name: "Melon",
        price: 4.99,
        type: "FRUIT"
    },
    {
        name: "Eggs",
        price: 8.99,
        type: "NON-DAIRY"
    },
    {
        name: "Milk",
        price: 9.99,
        type: "DAIRY"
    },
    {
        name: "Cheddar",
        price: 3.99,
        type: "DAIRY"
    },
    {
        name: "Tomatoe",
        price: 0.99,
        type: "FRUIT"
    },
    {
        name: "Lettuce",
        price: 1.49,
        type: "VEGETABLE"
    },
    {
        name: "Carrot",
        price: 2.29,
        type: "VEGETABLE"
    }
]

Product.insertMany(productSeeds)
    .then(res => console.log(res))
    .catch(err => console.log(err));