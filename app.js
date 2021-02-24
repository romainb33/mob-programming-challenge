require("dotenv").config();
require("./config/mongodb");
const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname+"/public"));
app.set("views",__dirname+"/views");
app.set("view engine","hbs");

app.listen(process.env.PORT, ()=>{
    console.log("You are live @ http://localhost:"+process.env.PORT);
})

