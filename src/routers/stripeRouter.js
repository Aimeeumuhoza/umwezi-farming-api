const express = require("express");
const payment = require("../controllers/stripeController")

const stripeRouter = express()

stripeRouter.post("/payment",payment)

module.exports = stripeRouter