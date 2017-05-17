
//Array
var dogs = ["Rusty", "Lucky", "Bubba"];

//Object
var dogs = {
	name: "Bubba",
	breed: "Lab"
};

//Comparing on how to retrieve the data
dogs[1]; //For the Array
dogs["name"]; //For the Object

//Adding something in
dogs.push("Wyatt");
dogs.age = 6;

//Reassigning 
dogs[1] = "Lucy";
dog.breed = "Black Lab";





//Nested Objects and Array

//Array
var posts = [
	//post[0] will give us this object
	{
		title: "Cats are mediocre",
		author: "Colt",
		comments: ["Awesome post", "Terrible post"]
	},
	//post[1] will give us this object
	{
		title: "Cats are awesome",
		author: "Cat lover",
		comments: ["<3", "Go to hell I hate you"]
	}
]

//If I want to access out "Cats are mediocre"
posts[0].title; //"Cats are mediocre"
posts[1].comments[1]; //"Go to hell I hate you"

