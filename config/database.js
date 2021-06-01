const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/node-auth", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log(`Database is connect`))
  .catch((err) => console.log(err));
