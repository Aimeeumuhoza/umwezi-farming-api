const express = require('express');
const database=require("./src/database/database");
const userRoute = require("./src/routers/useRouter")
const requestRoute =require("./src/routers/requestRouter")
const productRoute =require("./src/routers/productRouter")
const orderRoute =require("./src/routers/orderRoute")
const cartRoute =require("./src/routers/cartRouter")
const app=express()

app.use(express.json())

app.use("/user",userRoute)
app.use("/request",requestRoute)
app.use("/product",productRoute)
app.use("/order",orderRoute)
app.use("/order",cartRoute)
const port=8000
database()
app.listen(port,()=>{
    console.log(`server is running on http//:localhost:${port}`)
})