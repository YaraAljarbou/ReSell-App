const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
   name: { 
      type: String,
      required: [true, "Title is required"],
		minlength: [2, "Title must be at least 2 character long"]
   },
   price: { 
      type: Number,
      required: [true, "Price is required"],
      min: [2, "Price must be bigger than zero"]
   },
   desc: { 
      type: String,
      required: [true, "Description is required"],
      minlength: [10, "Description must be at least 10 character long"]
   },
   category: {
      type: String
   },
   rating_sum: {
      type: Number
   },
   rating_count: {
      type: Number
   },
   seller: {
      type: String
   }
}, { timestamps: true });
module.exports.Product = mongoose.model('Product', ProductSchema);
module.exports.ProductSchema = ProductSchema;