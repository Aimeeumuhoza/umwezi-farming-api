const Request=require('../modals/Request')


const createrequest=async(req,res)=>{
    try{
        
        
        const request = await Request.create({ Firstname:req.body.Firstname,Lastname:req.body.Lastname, Option:req.body.Option,Description:req.body.Description })
        return res.status(200).json({message:"required",request})

    }catch(err){
        console.log(err)
        
    }
}

module.exports = createrequest  