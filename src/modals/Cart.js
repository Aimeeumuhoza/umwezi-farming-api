const mongoose=require("mongoose")

const cartSchema= new mongoose.Schema({
    userId:{
           type:String,
    },
    
    product:[{
        productId:{
            type:String,
        },
        quantity:{
            type:String,
        },
    }]

})

const Cart =mongoose.model("Carts",cartSchema)
module.exports=Cart
