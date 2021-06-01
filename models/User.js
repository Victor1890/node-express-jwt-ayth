const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    validate: [isEmail, ""],
  },
  password: {
    type: String,
    required: [true, "Please enter an passord"],
    minlength: 4,
  },
});

module.exports = model("User", userSchema);
