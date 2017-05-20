var express = require("express");
var app = express();

app.get("/", function(req, res){
    //Typically we will not do this in express
    // res.render("home.html");
    
    //We would typically do this
    res.render("home.ejs");
    
});

//Fall in love with rusty
app.get("/fallinlovewith/:thing", function(req, res){
    var thing =  req.params.thing;
    //This is passing it to the ejs file
    //Inside the template (ejs file) it will make "thingVar" be equal to "thing"
    res.render("love.ejs", {thingVar: thing});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});






