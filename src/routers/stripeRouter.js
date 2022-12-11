const express = require("express");
const {pay,stripecard} = require("../controllers/stripeController")

const stripeRouter = express()

stripeRouter.post("/pay",pay)
stripeRouter.post("/stripe",stripecard)


module.exports = stripeRouter