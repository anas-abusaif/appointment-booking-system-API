const Request = require("../models/Request");
const router = require("express").Router();
const VerifyToken = require("../controlers/VarifyToken");

router.delete('/',VerifyToken,(req,res)=>{
Request.findByIdAndDelete({_id:req.body._id})
})

module.exports = router;