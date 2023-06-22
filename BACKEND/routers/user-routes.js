const mongoose = require('mongoose');
const bodyParser = require("body-parser")
const ejs = require("ejs");
const express = require("express")
const path = require('path');


const app = express.Router();

const Menu = require("../model.js");

app.use(bodyParser.urlencoded({
    extended: true
}));


// ANSWERING A GET REQUEST
app.get("/", function (req, res) {
    Menu.find({}).then((err, posts) => {
        if (err) {
            res.send(err);
        } else {
            res.send(posts);
        }
    });
});


// ANSWERING A GET REQUEST
app.get("/:nitem", function (req, res) {
    Menu.findOne({
        name: req.params.nitem
    }).then((err, posts) => {
        if (err) {
            res.send(err);
        } else {
            res.send(posts);
        }
    });
});
module.exports = app;
