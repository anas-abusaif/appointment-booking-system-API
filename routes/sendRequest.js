const router = require("express").Router();
const Request = require("../models/Request")
const VerifyToken = require("../controlers/VarifyToken");


router.post('/',VerifyToken,async(req,res)=>{
  const request = new Request({
    date:req.body.date,
    Buyer:req.body.Buyer,
    Seller:req.body.Seller
  })

  try {
    await request.save();
  } catch (err) {
    res.status(400).send(err);
  }

})

module.exports = router