const mongoose=require("mongoose")

const requestSchema= new mongoose.Schema({
    Firstname:{
           type:String,
    },
    Lastname:{
        type:String,
    },
    Email:{
        type:String,
    },
   Option:{
     type:String,
    },
    Description:{
    type:String,
    }
})

const Request=mongoose.model("Requests",requestSchema)
module.exports=Request
