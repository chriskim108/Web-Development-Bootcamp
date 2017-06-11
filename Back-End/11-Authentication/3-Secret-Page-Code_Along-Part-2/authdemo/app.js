var express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    User = require("./models/user"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = require("passport-local-mongoose");
    
mongoose.connect("mongodb://localhost/authen_demo_app");

var app = express();
app.set("view engine", "ejs");

//Using it in one shot
app.use(require("express-session")({
    secret: "This is my secret message",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//Very important because they would read in the session and taking data from the session
//serializeUser - Encoding it
//deserializeUser - Decoding it
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
    res.render("home");
});

//Secret Route
app.get("/secret", function(req,res){
    res.render("secret");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started....");
})