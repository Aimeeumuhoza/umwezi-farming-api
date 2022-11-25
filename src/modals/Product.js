const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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
    price: {
        type: String,
    },
    Address: {
        type: String,
    },
})

const Product = mongoose.model("Products", productSchema)
module.exports = Product
