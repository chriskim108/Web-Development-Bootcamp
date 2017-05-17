// JS Method
//Topic:
//Adding methods to an object
//Namespacin
//The Keyword "this"





var obj = {
	name: "Chuck",
	age: 45,
	isCool: false,
	friends: ["Bob", "Tina"],
	//You can also add function in objects
    add: function(x,y){
         return x+y;
    }
}

//This is calling onto the element of the object
obj.add(10,5); //Result: 15
//Why would we want to add a function to an object?
//It can help code be organize so it can be grouped logically together
//namespace collision - 2 different things but has the same name
function speak(){
	console.log("Woof");
}

function speak(){
	console.log("Meow");
}
//This has been reassigned
speak(); //Result: "Meow"





//We are making 2 objects (dogSpace, catSpace)
var dogSpace = {};

dogSpace.speak = function(){
	return "WOOF!";
}

var catSpace = {}

dogSpace.speak = function(){
	return "WOOF!";
}

dogSpace.speak();

catSpace.speak();
//We can get more methods





//The Keyword This
//UNDERSCORE.JS -> Popular library for javascript
//Reusuable code that others have written in which we can use (In a way like bootstrap)
//We can call them by 
//Example: _.map(something), _.reduce(something), ...





//Let's pretend I am making some app that has some comments
//I want to have some comment data stored inside a object as well as a few methods
//print, delete that is also stored inside the object as well
var comments = {};
comments.data = ["Good Job", "Bye", "Lame..."];//Adding this to the object

//This is if we were to make a seperate function and print out all the values
// function print(arr){
// 	arr.forEach(function(el){
// 		console.log(el);
// 	});
// }
// print(comments.data);


//Adding this method to the object
//"this" will refer to the object comments
//Because of "this" we do not need to specify on what we are inputting
//Inside the function "this" is referring to the .data
//I can think of "this" like a pointer to the actual information
comments.print = function(){
 	this.data.forEach(function(el){
 		console.log(el);
 	});
 }

comments.print();//Result: "Good Job", "Bye", "Lame..."




