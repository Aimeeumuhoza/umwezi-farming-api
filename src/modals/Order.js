const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    Products: [{
        productId: {
            type: String
        },
        Quantity: {
            type: Number
        },
    }],
    Amount: {
        type: Number
    },
    Status: {
        type: String,
        default: "pending"
    }

})

const Order = mongoose.model("Orders", orderSchema)
module.exports = Order
