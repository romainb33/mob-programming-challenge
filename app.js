require("dotenv").config();
require("./config/mongodb");
const express = require("express");
const app = express();
const hbs = require("hbs");

app.use(express.static(__dirname+"/public"));
app.set("views",__dirname+"/views");
app.set("view engine","hbs");

// harcoded arrays
const users = [{name: 'Magali', email: 'magali@ironhack.fr', favoriteLangage: 'JS'}, {name: 'Romain', email: 'romain@ironhack.fr', favoriteLangage: 'français'}, {name: 'Maud', email: 'maud@ironhack.fr', favoriteLangage: 'english'}];

const images = ['img/coding-1.jpeg', 'img/coding-2.jpeg', 'img/coding-3.jpeg'];

app.get(['/', '/home'], (req, res) => {
    let data = {
        images : images
    }
    console.log(data.images);
    res.render('home', data);
});

app.get('/my-dev-squad', (req, res) => {

})

app.listen(process.env.PORT, ()=>{
    console.log("You are live @ http://localhost:"+process.env.PORT);
});

