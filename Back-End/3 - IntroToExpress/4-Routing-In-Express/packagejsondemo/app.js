
//This will import the module expres
var express = require("express");
//Express has a lot of different methods
//Allowing app to have all the content of this express directory and will be saved inside app
var app = express();

// '/' -> "Hi There!"
// request is an object that contains all the information about the request that was made
// response will contain all the information about what we are going to respond with 
app.get("/", function(request, response){
    response.send("Hi There!");
});

// '/bye' -> "Goodbye!"
app.get("/bye", function(request, response){
   response.send("Goodbye"); 
});

// '/dog' -> "Woof!"
app.get("/dog", function(request, response){
    //When this website is "get" it will print out the console.log
    console.log("Someone Made a request to dog");
    response.send("Woof");
});

//The ':' will tells express to not match exactly from pattern to pattern but to make 
//it a pattern /r/(Anyword) 
//This example is meant to imitate the reddit website
app.get("/r/:subRedditName", function(request, response) {
    //This will tell the parameter of what the user has request
    // console.log(request.params);
    
    //It will list out which param we are in
    var subReddit = request.params.subRedditName;
    response.send("Welcome to the " + subReddit + " Subreddit");
});

app.get("/r/:subRedditName/comments/:id/:title/", function(request, response) {
    //This will tell the parameter of what the user has request
    console.log(request.params);
    response.send("Welcome to the comments page");
});


//  If we go one any other URL, we will respond with this message
//  The order of routes matter
app.get("*", function(request, response){
    response.send("You are a star");
});




// Tell Express to listen for request (Start Server)
// We need to tell it on what port to listen on
// "process.env.PORT" will return a number of the cloud9 server we have to use
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

