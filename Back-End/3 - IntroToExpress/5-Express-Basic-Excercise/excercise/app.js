
var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res){
    
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof"
    }
    var animal = req.params.animal;
    var sound = sounds[animal];
    
    res.send("The " + animal + " says " + sound);
    
    
});

app.get("/repeat/:message/:number", function(req, res){
    var value = req.params.message;
    var times = Number(req.params.number);
    var result = "";
    
    for(var i = 0; i < times; i++){
        result += value + " ";
    }
    
    res.send(result);
});



app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing with your life?");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!");
});

