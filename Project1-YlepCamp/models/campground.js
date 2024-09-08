// Create a mongoose schema - Import mongoose
import mongoose from 'mongoose';
const { Schema } = mongoose;

// Connect to MongoDB
const CampgroundSchema = new Schema({
  title: String,
  image: String,
  price: Number,
  description: String,
  location: String
})

export default mongoose.model('Campground', CampgroundSchema);