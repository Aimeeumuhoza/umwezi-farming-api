const Product=require("../modals/Product")

const createproduct=async(req,res)=>{

    try{
        const product = await Product.create({
        Title: req.body.Title,
        Description: req.body.Description, 
        Categories: req.body.Categories,
        Image:req.body.Image,
        Price:req.body.Price,
        Address:req.body.Address,
        })
        res.status(200).json({message:"product created successfully",product})
    }catch(error){
       console.log("err",error);


    }



}
module.exports = createproduct