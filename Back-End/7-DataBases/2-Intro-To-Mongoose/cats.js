var mongoose = require("mongoose");
//This will connect to the DB server
//After localhost we can name it anything
mongoose.connect("mongodb://localhost/cat_app");

//This tells our database (mongoose) Javascript side of things that
//We want to add cats to our database and the cat should defined as the object below
//We are saying that this is a pattern type of data
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

//We took the catSchema from above and compile it into a model and we save it to the "Cat"
//And now we can use that Cat variable: (Cat.find or Cat.remove or Cat.create ...)
//This allows us to use a lot of methods such as (create, find, ...)
var Cat = mongoose.model("Cat", catSchema);

//Adding a new cat to the DB
// var george = new Cat({
//     name: "Mrs Norris",
//     age: 7,
//     temperament: "Evil"
// });

//We are trying save "george" to the database as we pass in the fucntion 
//We use the function to check
//err = error 
// george.save(function(err, cat){
//     if(err){
//         console.log("Something Went Wrong");
//     }else{
//         console.log("We just saved a cat to the Database");
//         console.log(cat);
        
//     }
// });

//This is the alternative way instead of doing the above shown
Cat.create({
    name: "SnowWhite",
    age: 15,
    temperament: "Bland"
}, function(err, new_cat){
    if(err){
        console.log(err);
    }else{
        console.log(new_cat);
    }
});

//Retrieve all cats from the DB and console.log on each one
Cat.find({}, function(err, cats){
    if(err){
        console.log("Oh No Error");
        console.log(err);
    } else{
        console.log("All the Cats ....")
        console.log(cats);
    }
});


