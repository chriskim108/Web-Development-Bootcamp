var mongoose = require("mongoose");
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});
//This will give us a model that uses the variable above 
var Campground = mongoose.model("Campground", campgroundSchema);
module.exports = Campground;