const router = require("express").Router();
const Request = require("../models/Request")
const VerifyToken = require("../controlers/VarifyToken");


router.get('/',VerifyToken,async(req,res)=>{
  
  try {
    await res.send(Request.find({Seller:req.body._id}));
  } catch (err) {
    res.status(400).send(err);
  }

})

module.exports = router