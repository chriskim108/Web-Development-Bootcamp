
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

//If we go one any other URL, we will respond with this message
app.get("*", function(request, response){
    response.send("You are a star");
});




// Tell Express to listen for request (Start Server)
// We need to tell it on what port to listen on
// "process.env.PORT" will return a number of the cloud9 server we have to use
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started");
});

