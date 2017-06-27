var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    Campground  = require("./models/campground"),
    Comment     = require("./models/comment"),
    User        = require("./models/user"),
    seedDB      = require("./seeds");
    
//requiring routes
var commentRoutes    = require("./routes/comments"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes      = require("./routes/index")
    
// To check if our export is successful
// console.log(process.env.DATABASEURL);    
    
//export DATABASEURL=mongodb://localhost/yelp_camp_v10
var URL = process.env.DATABASEURL || "mongodb://localhost/yelp_camp_v10";
mongoose.connect(URL);

// This database is from Mongo Lab
// Method 1 -> This is the best method because it hides it
    // Go to heroku, and go to the dashboard and find the project
    // Once finding it, go to settings and "Config Vars" and input the Key and "mongodb://chris:password@ds139352.mlab.com:39352/yelpcampfinal"
// Method 2 -> Not really the best
    // Go throught the command line and type
        //heroku config:set MY_CUSTOM_VALUE=foobar (Syntax)
        //heroku config:set DATABASEURL=mongodb://chris:password@ds139352.mlab.com:39352/yelpcampfinal
        
    
// mongoose.connect("mongodb://chris:password@ds139352.mlab.com:39352/yelpcampfinal");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB(); //seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The YelpCamp Server Has Started!");
});