const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
    Title:{
           type:String,
    },
    Description:{
        type:String,
 },
   Image:{
     type:String,
 },
categories:{
    type:String,
},
price:{
    type:String,
},
Address:{
    type:String,
},
})

const Product=mongoose.model("Products", productSchema)
module.exports=Product
