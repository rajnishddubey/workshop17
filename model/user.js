const mongoose = require("mongoose");
const Productschema = mongoose.Schema({
    id:Number,
    productname:String,
    price:Number
})


module.exports = mongoose.model("product",Productschema);