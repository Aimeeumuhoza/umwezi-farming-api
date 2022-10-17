const Request=require('../modals/Request')


const createrequest=async(req,res)=>{
    try{
        
        
        const request = await Request.create({ Firstname:req.body.Firstname,Lastname:req.body.Lastname, Option:req.body.Option,Description:req.body.Description })
        return res.status(200).json({message:"required",request})

    }catch(err){
        console.log(err)
        
    }
}
const getrequest = async (req,res)=>{
    try{ 
        const id=  req.params._id
        const request = await Request.findById(id)
        // const user = await User.findAll()
        res.status(200).json({message:"request",request})
    }catch(error){
      console.log(error);
    }
  }
  const getAllrequest = async(req,res)=>{
    try{
       const request =await Request.find()
       res.status(200).json(request)
    }catch(err){
       console.log(err);
    }
  }
  const updaterequest= async(req,res)=>{
      
    try{
       const id=req.params._id
       const request=await Request .findByIdAndUpdate(id,req.body)
       res.status(200).json({messsage:"request updated",request})
    }
    catch(error){
       console.log(error)
    }
  }
  const deleterequest=async(req,res)=>{
      
    try{
        const id= req.params._id
        const request=await Request.findByIdAndDelete(id)
        res.status(200).json({message:"user deleted ",request})
    }catch(error){
       console.log(error)
    }
    }

module.exports = {createrequest,getrequest,getAllrequest,updaterequest,deleterequest} 