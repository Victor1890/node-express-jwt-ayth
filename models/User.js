const { Schema, model } = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Please enter an email"],
    lowercase: true,
    validate: [isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: [true, "Please enter an passord"],
    minlength: [4, "Minimun password is length 6 characters"],
  },
});

userSchema.post("save", function (doc, next) {
  console.log("new user was created and saved", doc);
  next();
});

userSchema.pre("save", function (next) {
  console.log("new user about to be created and saved", this);
  next();
});

module.exports = model("User", userSchema);
