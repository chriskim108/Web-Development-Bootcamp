var express = require("express");
var app = express();

//This will get us access into the public folder which contains the css
app.use(express.static("public"));
//This will make the standard into "ejs" so we dont have to write it continously
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res){
  var thing = req.params.thing;
   res.render("love", {thingVar: thing});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Susy"},
        {title: "My adorable pet bunny", author: "Charlie"},
        {title: "Can you believe this pomsky?", author: "Colt"}
    ];
    
    res.render("posts", {posts: posts});
})

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server is listening!!!"); 
});