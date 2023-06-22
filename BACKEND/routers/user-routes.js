const express = require("express")
const {check} = require("express-validator")
// const checkAuth = require("../middleware/auth-check")
const app = express.Router();

app.get("/canteen", function (req, res) {
    Menu.find({}).then((err, posts) => {
      if (err) {
        res.send(err);
      } else {
        res.send(posts);
      }
    });
  });


  app.get("/canteen/:nitem", function (req, res) {
    Menu.findOne({
      name: req.params.nitem
    }).then((err, posts) => {
      if (err) {
        res.send(err);
      } else {
        res.send("NO ARTICLE FOUND HERE");
      }
    });
  });
  module.exports=app;
