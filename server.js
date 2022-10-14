const express = require('express');
const database=require("./src/database/database");
const userRoute = require("./src/routers/useRouter")
const requestRoute =require("./src/routers/requestRouter")
const app=express()

app.use(express.json())

app.use("/user",userRoute)
app.use("/request",requestRoute)

const port=8000
database()
app.listen(port,()=>{
    console.log(`server is running on http//:localhost:${port}`)
})