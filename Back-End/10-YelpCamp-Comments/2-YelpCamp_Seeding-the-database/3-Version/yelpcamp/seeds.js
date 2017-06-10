// In here we are going to create a bunch of campgrounds and a few comments
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

//This is our Starter Data
var data = [
    {
        name: "Clouds Rest", 
        image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
        description: "Bla bla bla"
    },
    {
        name: "Deset Mesa", 
        image: "https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg",
        description: "Bla bla bla"
    },
    {
        name: "Canyon Floor", 
        image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
        description: "Bla bla bla"
    }
];


function seedDB(){
    //Remove all Campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
    });
    //Add a few campgrounds
    data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
            if(err){
                console.log(err);
            } else{
                console.log("Added a campground");
                //Create a comment
                Comment.create(
                    {
                        text: "This place was okay, need internet"
                        author: "Homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else{
                            campground.comments.push(comment);
                            campground.save();   
                            console.log("Created a new Comment");
                        }

                    });
            }
        });
    });
        
    // });
    
    
    //Add a few comments
    
}

module.exports = seedDB;