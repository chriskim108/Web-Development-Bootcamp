// This is an alternative
var express       = require("express"), 
    app           = express(), 
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// SCHEMA SETUP -> This is the long way 
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

//This will give us a model that uses the variable above 
var Campground = mongoose.model("Campground", campgroundSchema);



// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://www.campamerica.co.uk/images/uploads/images/Private-Camp---Camp-Westmont-1400-x-610.png"
        
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else{
//             console.log("Newly Created Campground: ");
//             console.log(campground);
//         }
//     });


var campgrounds = [
    {name: "Salmon Creek", image: "http://www.sanctuaryretreats.com/media/2490124/uganda_gorilla_forest_camp_-_bwindi.jpg"},
    {name: "Granite Hill", image: "https://www.campamerica.co.uk/images/uploads/images/Private-Camp---Camp-Westmont-1400-x-610.png"},
    {name: "Mountain Goat's Rest", image: "http://www.wilderness-safaris.com/media/homepage/headers/wilderness-safaris-mombo-camp.jpg"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    //Get all the campgrounds from the DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    });
    
});

app.post("/campgrounds", function(req, res){
    //This is to debug it
    //res.send("You hit the post route");
    //Get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    // Create a new campground and save to the database
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else{
            //Redirect back to campgrounds page
            res.redirect("/campgrounds");
        }
    });

});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started");
});




