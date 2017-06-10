var mongoose = require("mongoose");
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    //We are creating an array of comments (Comments property)
    //This is our associations 
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
});
//This will give us a model that uses the variable above 
var Campground = mongoose.model("Campground", campgroundSchema);
module.exports = Campground;