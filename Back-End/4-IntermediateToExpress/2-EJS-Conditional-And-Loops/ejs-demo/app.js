var express = require("express");
var app = express();

// This will tell express to serve the content inside that directory
// This will allow us to use the css file inside the public/
app.use(express.static("public"));
// This will make the standard file (ejs) so we no longer have to put the ejs at the end
app.set("view engine", "ejs");

app.get("/", function(req, res){
    //Typically we will not do this in express
    // res.render("home.html");
    
    //We would typically do this
    res.render("home");
});

//Fall in love with rusty
app.get("/fallinlovewith/:thing", function(req, res){
    var thing =  req.params.thing;
    //This is passing it to the ejs file
    //Inside the template (ejs file) it will make "thingVar" be equal to "thing"
    res.render("love", {thingVar: thing});
});

//The posts
app.get("/posts", function(req, res){
    var posts = [
            {title: "Post 1", author: "Susy"},
            {title: "My adorable pet bunny", author: "Charlie"},
            {title: "Can you believe this pomsky?", author: "Colt"}
        ];
        res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

