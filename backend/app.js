const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const {conn} = require("./conn/conn")
const user = require("./routes/user")
const Books = require("./routes/book")
const favourite = require("./routes/favourite")
const Cart = require("./routes/cart")
//routes
app.use("/api/v1",user);
app.use("/api/v1",Books);
app.use("/api/v1",favourite);
app.use("/api/v1",Cart);
conn();

app.listen(process.env.PORT, (error) => {
  if(error){
    console.log("Error starting the server:", error);
  }
  else{
    console.log(`server started at port ${process.env.PORT}`);
  }
});
