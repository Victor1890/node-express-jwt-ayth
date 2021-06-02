const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErros = (err) => {
  let error = { email: "", password: "" };
  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }
  return error;
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "key secret value", {
    expiresIn: maxAge,
  });
};

const signup_get = async (req, res) => {
  res.render("signup");
};
const login_get = async (req, res) => {
  res.render("login");
};

const signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });

    const token = createToken(user._id);

    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErros(err);
    return res.status(400).json({ errors });
  }
};
const login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });
};

module.exports = { signup_get, login_get, signup_post, login_post };
