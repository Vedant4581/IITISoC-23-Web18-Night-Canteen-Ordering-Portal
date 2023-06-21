const mongoose = require('mongoose');
let canteenmenu=require("./model.js");
const bodyParser=require("body-parser")
const ejs = require("ejs");


const express=require('express');
const app=express();
const path=require('path');
const port=80;
app.set('view engine', 'ejs');
app.use(express.static("public"));

// import canteenmenu from "./model.js";

app.use(bodyParser.urlencoded({
  extended: true
}));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/canteen');
    console.log("WE ARE NOW CONNECTED");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// const canteenmenu = new mongoose.Schema({
//    name: String,
//     price: Number,
//     description: String,
//     id:String
//   });

  const Menu = mongoose.model('Menu', canteenmenu);

  
  const menuitems = Menu.find({}).then((err, posts) => {
    if (err) {
        console.error(err);
      } else {
        console.log(posts);
      }
    });
console.log(menuitems);

app.get("/canteen",function(req,res){
  Menu.find({}).then((err, posts) => {
    if (err) {
        res.send(err);
      } else {
        res.send(posts);
      }
    });
});

app.post("/canteen",function(req,res){
  const newitem=new Menu({
    name : req.body.name,
    description:req.body.description,
    price:req.body.price,
    id:req.body.id
  });

  
  // console.log(req.body);
  newitem.save();
});
app.get("/canteen/:nitem",function(req,res){
  Menu.findOne({
    name:req.params.nitem
  }).then((err, posts) =>{
    if (err) {
      res.send(err);
      } else {
        res.send("NO ARTICLE FOUND HERE");
      }
  });
});

app.put("/canteen/:nitem",function(req,res){
  Menu.updateOne(
    {name:req.params.nitem},
    {$set:{name:req.body.name,
    price:req.body.price,
    description:req.body.description,
    id:req.body.id}},
    {overwrite:true}).then(
    function(err){
      if(err){
        res.send(err);
      }else{
        res.send("SUCCESSFULLY UPDATED");
      }
    }
    );
        })

        app.patch("/canteen/:nitem",function(req,res){
          Menu.updateOne(
            {name:req.params.nitem},
            {$set:req.body}).then(
            function(err){
              if(err){
                res.send(err);
              }else{
                res.send("SUCCESSFULLY UPDATED");
              }
            }
            );
                });
                app.delete("/canteen/:nitem",function(req,res){
                  Menu.deleteOne({name:req.params.nitem}).then(function(err){
                    if(err){
                      res.send("DELETED SUCCESSFULY");
                    }else{
                      res.send(err);
                    }
                  })
                   
                    
                })
// Menu.fin;d({}, (err, posts) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(posts);
//     }
//   });
  
app.listen(port,()=>{
  console.log(`THE APPLICATION STARTED SUCCESSFULLY ON PORT ${port}`);
});