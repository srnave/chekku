const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  oil: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  phoneno: {
    type: Number,
    default: 0,
  },
  tquantity: {
    type: Number,
    default: 0,
  },
  streetname: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: false,
  },
  pincode: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
 
});

const User = mongoose.model("User", UserSchema);



module.exports = User;