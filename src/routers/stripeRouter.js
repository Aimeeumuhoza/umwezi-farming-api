const express = require("express");

const stripeRouter = express()

stripeRouter.post("/payment",paymentController.payment)

module.exports = stripeRouter