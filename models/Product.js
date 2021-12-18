const mongoose = require("../config/db");

var ProductSchema = mongoose.Schema({
    Name:String,
    SKU:Number,
    Price:Number,
    Quantity:Number
});
var Product = mongoose.model("Product",ProductSchema,"products");
module.exports = Product;