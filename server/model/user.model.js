const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  username: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: /^\S+@\S+\.\S+$/,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
},{
    versionKey:false
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
