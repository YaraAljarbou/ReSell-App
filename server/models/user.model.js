const mongoose = require('mongoose');
const { ProductSchema } = require('./product.model');
const UserSchema = new mongoose.Schema({
   name: { 
      type: String,
      required: [true, "Title is required"],
		minlength: [2, "Title must be at least 2 character long"]
   },
   password: { 
      type: String,
      required: [true, "Price is required"],
      min: [2, "Price must be bigger than zero"]
   },
   cart: [ProductSchema],
   likes: [ProductSchema],
   orders: [ProductSchema]
}, { timestamps: true });
module.exports.User = mongoose.model('User', UserSchema);