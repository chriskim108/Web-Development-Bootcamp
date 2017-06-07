var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

//POST - Title, Content
var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//USER - Email, Name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [postSchema]
});
var User = mongoose.model("User", userSchema);


// var newUser = new User({
//     email: "Hermione@hogwarts.edu",
//     name: "Hermione Granger"
// });

// newUser.post.push({
//     title: "How to bre polyjuice potion",
//     content: "Just kidding, go to potions class to learn it!"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(user);
//     }
// });

// var newPost = new Post({
//     title: "Reflections on Apples",
//     content: "They are delicious"
// })

// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         console.log(post);
//     }
// });


//Retrive the existing user
User.findOne({name: "Hermione Granger"}, function(err,user){
    if(err){
        // console.log(err);
    } else{
        user.post.push({
            title: "3 things I really hate",
            content: "Voldemort, Voldemort, Voldemort"
        });
        
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else{
                console.log(user);
            }
        });
    }
});