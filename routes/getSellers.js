const router = require("express").Router();
const User = require("../models/User")
const VerifyToken = require("../controlers/VarifyToken");


router.get('/',VerifyToken,async(req,res)=>{
  
  try {
    await res.send(User.find({role:"Seller"}));
  } catch (err) {
    res.status(400).send(err);
  }

})

module.exports = router