// In here we are going to create a bunch of campgrounds and a few comments
var mongoose = require("mongoose");
var Campground = require("./models/campground");

function seedDB(){
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
    });    
}

module.exports = seedDB;