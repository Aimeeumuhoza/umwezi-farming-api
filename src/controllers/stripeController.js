const Stripe = require("stripe");

const dotenv = require("dotenv")
dotenv.config()
const stripe = Stripe(process.env.STRIPE_KEY);

const pay = async (req, res) => {
    try {
        const {name,amount} = req.body;
        if(!name) return res.status(400).json({message:"Please enter the name"});

        const paymentIntent = await stripe.paymentIntents.create({
            amount:amount * 100,
            metadata:{name},
            currency:"usd",
            payment_method_types:['card']
        });
        const clientSecret = paymentIntent.client_secret;
        res.status(200).json({message:"payment iNitiated",clientSecret});
    } catch (err) {
        console.log(err);
        res.status(200).json({error:err.message})
    }
}

const stripecard = async(req, res)=>{

    stripe.ChargesResource.create({
        source:req.body.tokenId,
        amount:req.body.amount,
        currency:'usd'
    },
    (stripeError,stripeRes) =>{
        if(stripeError){
            res.status(500).json(stripeError);
        }
        else{
            res.status(200).json(stripeRes);
        }
    }
    );
}

module.exports = {pay,stripecard}