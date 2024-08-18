import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import mongoose from 'mongoose';
import Product from './models/product.js';

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

app.listen(port, () => {
  console.log(`App is listening on port ${port}`)
})

// Test route to ensure application is running
app.get('/test', async (req, res) => {
    res.render('test');
});

app.get('/shop', async (req, res) => {
    const products = await Product.find({});
    products.forEach(p => console.log(p.name));
    res.render('shop/index', { products });
});

app.get('/shop/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const product = await Product.findById(id);
    res.render('shop/item', { product });
})