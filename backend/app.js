const express = require("express");
const app = express();
require("dotenv").config();
require("./conn/conn");
// const port = 3000


app.listen(process.env.PORT, () => {
  console.log(`server started at port ${process.env.PORT}`);
});
