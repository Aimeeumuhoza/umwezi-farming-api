const User=require('../modals/User')
const bcrypt = require('bcryptjs');

const createUser = async(req,res)=>{
    try{ 
        const salt = await bcrypt.genSalt(8)
        const hashpsw = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashpsw
       const user = await User.create({
           username: req.body.name,
           email: req.body.email, 
           password: req.body.password
       })
       return res.status(200).json({message:"user created successfully",user})
    }catch(error){
       console.log(error);
       
    }
}

module.exports = createUser   
