const User = require("../models/User");

const handleErros = (err) => {
  console.log(err.message, err.code);

  let error = { email: "", password: "" };

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      error[properties.path] = properties.message;
    });
  }

  return error;
};

const signup_get = async (req, res) => {};
const login_get = async (req, res) => {};

const signup_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password });
    res.status(201).json(user);
  } catch (err) {
    const error = handleErros(err);
    return res.status(400).json({ error });
  }
};
const login_post = async (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });
};

module.exports = { signup_get, login_get, signup_post, login_post };
