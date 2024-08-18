import mongoose from 'mongoose';
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
        enum: ['FRUIT', 'VEGETABLE', 'DAIRY', 'NON-DAIRY']
    }
})

const Product = mongoose.model('Product', productSchema);
export default Product;