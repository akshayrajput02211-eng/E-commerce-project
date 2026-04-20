const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user:    { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name:    String,
  rating:  Number,
  comment: String,
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name:          { type: String, required: true },
  description:   String,
  price:         { type: Number, required: true },
  category:      String,
  image:         String,
  countInStock:  { type: Number, default: 0 },
  reviews:       [reviewSchema],
  rating:        { type: Number, default: 0 },
  numReviews:    { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);