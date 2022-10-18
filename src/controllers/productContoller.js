const Product = require("../modals/Product")

const createproduct = async(req,res)=>{

    try{
        const product = await Product.create({
        Title: req.body.Title,
        Description: req.body.Description, 
        Categories: req.body.Categories,
        Image:req.body.Image,
        Price:req.body.Price,
        Address:req.body.Address,
        })

      return res.status(200).json({message:"product created successfully",product})
    }catch(error){
       console.log("err",error);


    }
  }
    const getProduct = async (req,res)=>{

        try{ 
            const id = req.params._id
            const product = await Product.findById(id)
  
            res.status(200).json({message:"products",product})
        }catch(error){
          console.log(error);
        }
      }
      const getAllproduct = async(req,res)=>{
        try{
           const product =await Product.find()
           res.status(200).json(product)
        }catch(err){
           console.log(err);
        }
      }
      const updateproduct= async(req,res)=>{
      
        try{
           const id=req.params._id
           const product=await Product .findByIdAndUpdate(id,req.body)
           res.status(200).json({messsage:"product updated",product})
        }
        catch(error){
           console.log(error)
        }
      }
      const deleteproduct=async(req,res)=>{
      
        try{
            const id= req.params._id
            const product=await Product.findByIdAndDelete(id)
            res.status(200).json({message:"product deleted ",product})
        }catch(error){
           console.log(error)
        }
        }

module.exports ={ createproduct, getProduct,getAllproduct,updateproduct,deleteproduct}