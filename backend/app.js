const express = require("express");
const app = express();
require("dotenv").config();

const {conn} = require("./conn/conn")


conn();

app.listen(process.env.PORT, (error) => {
  if(error){
    console.log("Error starting the server:", error);
  }
  else{
    console.log(`server started at port ${process.env.PORT}`);
  }
});
