const app = require("./app");
require("./config/database");

const init = async () => {
  await app.listen(3000);
  console.log("Listen on port 3000");
};

init();
