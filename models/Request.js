const mongoose = require("mongoose")

const RequestSchema = new mongoose.Schema({

  Buyer: {
    type: String,
    required: true
  },
  Seller: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model("Request", RequestSchema)