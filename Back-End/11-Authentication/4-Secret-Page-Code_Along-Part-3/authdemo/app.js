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
app.use(bodyParser.urlencoded({extended: true}));
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

//==================================
// ROUTES
//==================================





app.get("/", function(req, res){
    res.render("home");
});

//Secret Route
app.get("/secret", function(req,res){
    res.render("secret");
});

//Authentication Routes
//Show sign up form
app.get("/register", function(req, res){
    res.render("register");
});
//Handling User Signup
app.post("/register", function(req, res){
    req.body.username
    req.body.passport
    //We made a new User Object and passed in the "username"
        //new User({username: req.body.username})
    //We would pass in the password as a second argument to User.register
        //req.body.password
    //User.register will take the new user and it will hash the password (Converting to numbers and letters)
    //It will be stored in the data base
    //If everything goes well, it will return a new user that everything inside of it
    User.register(new User({username: req.body.username}), req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        } 
        passport.authenticate("local")(req, res, function(){
            res.redirect("/secret");
        });
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started....");
})