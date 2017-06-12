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
//Creating a new local strategy using the "User.authenticate()" that is coming from "passportLocalMongoose"
passport.use(new LocalStrategy(User.authenticate()));
//serializeUser - Encoding it
passport.serializeUser(User.serializeUser());
//deserializeUser - Decoding it
passport.deserializeUser(User.deserializeUser());

//==================================
// ROUTES
//==================================


app.get("/", function(req, res){
    res.render("home");
});

//Secret Route
app.get("/secret", isLoggedIn, function(req,res){
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

//Login Routes
//Login GET Route
//Render login form
app.get("/login", function(req,res){
    res.render("login");
});
//Login POST Route
//Login Logic 
//Middleware
    //A code that runs before our final route callback 
    //(successRedirect or failureRedirect) is our middleware
app.post("/login", passport.authenticate("local", {
    //If it is success we will redirect to "/secret"
    //If it is not successful we will redirect to "/login"
    successRedirect: "/secret",
    failureRedirect: "/login"
}) ,function(req, res){
});

//Logout
app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


//When the website redirects the webpage it will redirect to "/secret"
//If the user is authenticated, it will move on "next"
//However, if the user is not authenticated, it will redirect back to login
function isLoggedIn(req, res, next){
    //If the authentication is true, it will go next
    if(req.isAuthenticated()){
        return next();
    }
    //Else it will redirect to login
    res.redirect("/login");
}

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started....");
})