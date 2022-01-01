const router = require("express").Router();
const Appointment = require("../models/Appointment")
const VerifyToken = require("../controlers/VarifyToken");


router.post('/',VerifyToken,async(req,res)=>{
  const appointment = new Appointment({
    date:req.body.date,
    Buyer:req.body.Buyer,
    Seller:req.body.Seller
  })

  try {
    await appointment.save();
  } catch (err) {
    res.status(400).send(err);
  }

})

module.exports = router