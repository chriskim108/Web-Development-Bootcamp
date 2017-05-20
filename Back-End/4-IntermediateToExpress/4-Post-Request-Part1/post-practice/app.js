var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lilly"];

app.get("/", function(req, res){
    res.render("home");
});

app.post("/addfriend", function(req, res){
    // We cannot do this right away, we need to install another package
    // npm install body-parsar --save
    // This is just one way to debug everything
    // console.log(req.body.newfriend);
    
    var newFriend = req.body.newfriend;
    friends.push(newFriend);
    // This will direct to a new page 
    // res.send("You have reached the Post Route");
    
    // This will redirect us to a route 
    res.redirect("/friends");
});


app.get("/friends", function(req, res){
    res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});
