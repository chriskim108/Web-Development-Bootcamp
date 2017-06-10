// In here we are going to create a bunch of campgrounds and a few comments
var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

//This is our Starter Data
var data = [
    {
        name: "Clouds Rest", 
        image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ipsum non nulla pellentesque aliquam. Nam varius felis leo, vel mollis metus consectetur eget. In hac habitasse platea dictumst. Donec ullamcorper dolor at leo rutrum ornare. Vestibulum ac urna dolor. Vestibulum aliquet nunc sit amet tellus egestas vestibulum. Etiam convallis enim et viverra faucibus. Fusce vel purus sed risus accumsan commodo eu a dolor."
    },
    {
        name: "Deset Mesa", 
        image: "https://www.nhstateparks.org/uploads/images/Dry-River_Campground_02.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ipsum non nulla pellentesque aliquam. Nam varius felis leo, vel mollis metus consectetur eget. In hac habitasse platea dictumst. Donec ullamcorper dolor at leo rutrum ornare. Vestibulum ac urna dolor. Vestibulum aliquet nunc sit amet tellus egestas vestibulum. Etiam convallis enim et viverra faucibus. Fusce vel purus sed risus accumsan commodo eu a dolor."
    },
    {
        name: "Canyon Floor", 
        image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper ipsum non nulla pellentesque aliquam. Nam varius felis leo, vel mollis metus consectetur eget. In hac habitasse platea dictumst. Donec ullamcorper dolor at leo rutrum ornare. Vestibulum ac urna dolor. Vestibulum aliquet nunc sit amet tellus egestas vestibulum. Etiam convallis enim et viverra faucibus. Fusce vel purus sed risus accumsan commodo eu a dolor."
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
                        text: "This place was okay, need internet",
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