const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require('path');
const ejs = require("ejs");
const express = require("express");
const app = express.Router();


app.use(bodyParser.urlencoded({
    extended: true
}));


const Menu = require("../model.js");

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

// ANSWERING A POST REQUEST 
app.post("/", function (req, res) {
    const newitem = new Menu({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        id: req.body.id
    });
    // console.log(req.body);
    newitem.save();
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

// ANSWERING A PUT REQUEST 
app.put("/:nitem", function (req, res) {
    Menu.updateOne(
        { name: req.params.nitem },
        {
            $set: {
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                id: req.body.id
            }
        },
        { overwrite: true }).then(
            function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.send("SUCCESSFULLY UPDATED");
                }
            }
        );
})

// ANSWERING A PATCH REQUEST 
app.patch("/:nitem", function (req, res) {
    Menu.updateOne(
        { name: req.params.nitem },
        { $set: req.body }).then(
            function (err) {
                if (err) {
                    res.send(err);
                } else {
                    res.send("SUCCESSFULLY UPDATED");
                }
            }
        );
});

// ANSWERING A DELETE REQUEST 
app.delete("/:nitem", function (req, res) {
    Menu.deleteOne({ name: req.params.nitem }).then(function (err) {
        if (err) {
            res.send("DELETED SUCCESSFULY");
        } else {
            res.send(err);
        }
    })


})

app.delete("/", function (req, res) {
    Menu.deleteMany({}).then(function (err) {
        if (err) {
            res.send("DELETED SUCCESSFULY");
        } else {
            res.send(err);
        }
    });


});

module.exports = app;
