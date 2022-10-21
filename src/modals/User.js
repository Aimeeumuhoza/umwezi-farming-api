const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({
    
username:{
       type:String,
},
email:{
    type:String,
},
password:{
    type:String,
},
role:{
    type:String,
    // default:"client",
    enum:["farmer","salesPerson","admin"]
}
})
const User = mongoose.model("users",userSchema)

module.exports = User