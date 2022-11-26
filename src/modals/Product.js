const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    UserId: {
        type:String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "User"
    },
    Title: {
        type: String,
    },
    Description: {
        type: String,
    },
    Image: {
        type: String,
    },
    Categories: {
        type: String,
    },
    CountInStock:{
        type: Number,
    },
    price: {
        type: Number,
    },
    Address: {
        type: String,
    },
    inStock:{
        type:Boolean,
        default:true
    }
})

const Product = mongoose.model("Products", productSchema)
module.exports = Product
