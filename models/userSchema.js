const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    name: String,
    email: String,
    contact: String,
    profile: String,
    skill: String,
    education: String,
    experience: String,
    hobbies: String,
    language: String,
    birth: String, 

});



module.exports = mongoose.model("user",userModel); 