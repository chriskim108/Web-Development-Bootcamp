var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "Salmon Creek", image: "http://www.sanctuaryretreats.com/media/2490124/uganda_gorilla_forest_camp_-_bwindi.jpg"},
    {name: "Granite Hill", image: "https://www.campamerica.co.uk/images/uploads/images/Private-Camp---Camp-Westmont-1400-x-610.png"},
    {name: "Mountain Goat's Rest", image: "http://www.wilderness-safaris.com/media/homepage/headers/wilderness-safaris-mombo-camp.jpg"}
]

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    //This is to debug it
    //res.send("You hit the post route");
    //Get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    //Redirect back to campgrounds page
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("YelpCamp Server has Started");
});




