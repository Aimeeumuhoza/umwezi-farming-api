const Product = require("../modals/Product")
const cloudinary = require("../helpers/cloudinary")
const createproduct = async (req, res) => {

  try {
    const result = await cloudinary.uploader.upload(req.file.path)
    // const id= req.user.data.id
    // console.log(id);
    const product = await Product.create({
      UserId: req.body.UserId,
      Title: req.body.Title,
      Description: req.body.Description,
      Categories: req.body.Categories,
      Image: result.secure_url,
      price: req.body.price,
      Address: req.body.Address,
      CountInStock: req.body.CountInStock
    })

    return res.status(200).json({ message: "product created successfully", product })
  } catch (error) {
    console.log("err", error);


  }
}
const getProduct = async (req, res) => {

  try {
    const id = req.params._id
    const product = await Product.findById(id)

    res.status(200).json({ message: "products", product })
  } catch (error) {
    console.log(error);
  }
}
const getAllproduct = async (req, res) => {
  try {
    const product = await Product.find()
    res.status(200).json(product)
  } catch (err) {
    console.log(err);
  }
}
const getUserProduct = async (req, res) => {
  try {
    const Products = await Product.find({userId: req.params.UserId})
    return res.status(200).json({message:"user products are retrieved",Products})
  } catch (error) {
    return res.status(400).json({error:error.message})
  }
}
const updateproduct = async (req, res) => {

  try {
    const id = req.params._id
    const product = await Product.findByIdAndUpdate(id, req.body)
    return res.status(200).json({ messsage: "product updated", product })
  }
  catch (error) {
    console.log(error)
  }
}
const deleteproduct = async (req, res) => {

  try {
    const id = req.params._id
    const product = await Product.findByIdAndDelete(id)
    res.status(200).json({ message: "product deleted ", product })
  } catch (error) {
    console.log(error)
  }
}

module.exports = { createproduct, getProduct, getAllproduct, updateproduct, deleteproduct, getUserProduct }