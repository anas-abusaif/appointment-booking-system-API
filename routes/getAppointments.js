const router = require("express").Router();
const Appointment = require("../models/Appointment")
const VerifyToken = require("../controlers/VarifyToken");


router.get('/',VerifyToken,async(req,res)=>{

  try {
    await res.send(Appointment.find({Seller:req.body._id}));
  } catch (err) {
    res.status(400).send(err);
  }

})

module.exports = router