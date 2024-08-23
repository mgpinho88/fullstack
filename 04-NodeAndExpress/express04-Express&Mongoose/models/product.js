import mongoose from 'mongoose';
import Categories from '../lib/consts.js'
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
        min: 0
    },
    category: {
        type: String,
        uppercase: true,
        enum: Categories
    }
})

const Product = mongoose.model('Product', productSchema);
export default Product;