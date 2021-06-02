const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

const authRoues = require("./routes/auth.routes");

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set("view engine", "ejs");

// routes
app.get("/", (req, res) => res.render("home"));
app.get("/smoothies", (req, res) => res.render("smoothies"));
app.use(authRoues);

module.exports = app;
