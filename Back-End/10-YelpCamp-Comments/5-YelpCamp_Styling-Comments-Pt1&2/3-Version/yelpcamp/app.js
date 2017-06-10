// This is an alternative
var express       = require("express"), 
    app           = express(), 
    bodyParser    = require("body-parser"),
    mongoose      = require("mongoose"),
    Campground    = require("./models/campground"),
    Comment       = require("./models/comment"),
    seedDB        = require("./seeds");


mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
//Goes to the respected directory
app.use(express.static(__dirname + "/public"));
seedDB();

// SCHEMA SETUP -> This is the long way 
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//This will give us a model that uses the variable above 
var Campground = mongoose.model("Campground", campgroundSchema);


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
            res.render("campgrounds/index", {campgrounds: allCampgrounds});
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
    res.render("campgrounds/new");
});

//SHOW - Shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
    //Find the campground with provided ID
    //We are finding the campgrounds by ID
    //Then populating it with comments
    //Then we are executing the query
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        }else{
            //Render show template with that campground
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});


// ========================================
// COMMENTS ROUTES
// ========================================
app.get("/campgrounds/:id/comments/new", function(req,res){
    //Find campground by id
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
        } else{
            res.render("comments/new", {campground: campground});
        }
    })
    console.log("comments/new");
});

app.post("/campgrounds/:id/comments", function(req, res){
    //Lookup campground using the ID
    Campground.findById(req.params.id, function(err, campground){
        if(err){
            console.log(err);
            res.redirect("/campgrounds");
        } else{
            Comment.create({req.body.comment, function(err, comment){
                if(err){
                    console.log(err);
                } else{
                    //Associate the comment to campground
                    campground.comments.push(comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
    //Create new Comment
    //Connect new comment to campground
    //Redirect to campgrounds show page
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started");
});




