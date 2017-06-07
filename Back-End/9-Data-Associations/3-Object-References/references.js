var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

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
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});
var User = mongoose.model("User", userSchema);

// Post.create({
//     title: "How to cook the best burger Part 3",
//     content: "ningpnsiongipsvn ps vns pn kpsn p"
// }, function(err, post){
//     if(err){
//         console.log(err);
//     } else{
//         User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else{
//             foundUser.post.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else{
//                     console.log(data);
//                 }
//             });
//             }
//         });
//     }
// });


//Find User 
//Find all posts for that user 
//We had written a longer query
User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
    if(err){
        console.log(err);
    } else{
        console.log(user);
    }
});

// User.create({
//     email: "bob@gmail.com",
//     name: "Bob Belcher"
// });

//Summary:
//We had stored in data 
//We made a 2nd query to retrieve the data