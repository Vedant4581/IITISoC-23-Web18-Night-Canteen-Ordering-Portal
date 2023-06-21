const mongoose = require('mongoose');
const canteenmenu = new mongoose.Schema({
    name: String,
     price: Number,
     description: String,
     id:String
   });
 module.exports={
    name: String,
    price: Number,
    description: String,
    id:String 
 };

// export default canteenmenu;
