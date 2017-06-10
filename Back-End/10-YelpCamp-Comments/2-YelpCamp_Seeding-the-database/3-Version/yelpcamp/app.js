// This is an alternative
var express       = require("express"), 
    app           = express(), 
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    Campground    = require("./models/campground"),
    seedDB        = require("./seeds");

seedDB();
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


// SCHEMA SETUP -> This is the long way 
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//This will give us a model that uses the variable above 
var Campground = mongoose.model("Campground", campgroundSchema);



// Campground.create(
//     {
//         name: "Granite Hill", 
//         image: "https://www.campamerica.co.uk/images/uploads/images/Private-Camp---Camp-Westmont-1400-x-610.png",
//         description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite"
        
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

//This is the INDEX Route - Show all campgrounds
app.get("/campgrounds", function(req, res){
    //Get all the campgrounds from the DB
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else{
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
    
});

// CREATE Route - Add new campground to DB
app.post("/campgrounds", function(req, res){
    //This is to debug it
    //res.send("You hit the post route");
    //Get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
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

//NEW - Show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});

//SHOW - Shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //Find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            //Render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
    req.params.id
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started");
});




