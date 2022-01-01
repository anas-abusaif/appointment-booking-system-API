const mongoose = require("mongoose")

const AppointmentSchema = new mongoose.Schema({

  Buyer: {
    type: String,
    required: true
  },
  BuyerName: {
    type: String,
    required: true
  },
  Seller: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Appoitment", AppointmentSchema)