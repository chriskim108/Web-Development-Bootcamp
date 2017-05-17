
//OBJECTIVES
//Understand objects conceptually
//Write code using JS objects

//Suppose I wanted to model a single person: name, age, and city
//I could use an array like this:
var person_1 = ["Cindy", 32, "Missoula"];

//To retrieve the person's hometown:
//If we were to do this, it assumes we know the indexing
person_1[2]; //This is not very meaningful code

//What if I accidentally reversed the order?
//And not knowing the ordering
var person_2 = ["Travis", "Los Angeles", 21];

//This is a perfect use for an OBJECT
//var person_1 = ["Cindy", 32, "Missoula"]; -> Alternative is below
var person = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
};
//Objects do not have any built in order, unlike an array

//How do we extract the data from the object?
//There are 2 choices:

//Choice 1
console.log(person["name"]); //Bracket notation

//Choice 2
console.log(person.name); //Dot notation





//Retrieving data
//There are a few differences between the 2 notations:
//You cannot use dot notation if the property starts with a number
//someObject.1blah; -> Invalid 
//someObject[1blah]; -> Valid

//You can lookup using a variable with bracket notation
//var str = "name";
//someObject.str; -> Doesn't look for "name" (Invalid)
//someObject[str]; -> Does evaluate str and looks for "name" (Valid)

//You cannot use the dot notation for property name with spaces
//someObject.fav color; -> Invalid
//someObject["fav color"]; -> Valid





//UPDATING DATA
//Just like an array: Access a property and reassign it
var person = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
};

//To update the age
person["age"] += 1; //The new age is 33
//To update the city
person.city = "London"; //The new city is London





//CREATING OBJECTS
//Like arrays, there are a few methods of initializing objects

//Option 1
//Make an empty object and then add to it
var person = {}
person.name = "Travis";
person.age = 21;
person.city = "LA"

//Option 2
//All at once
var person = {
	name: "Travis",
	age: 21,
	city: "LA"
};

//Option 3
//Another way of initializing an Object
var person = new Object();
person.name = "Travis";
person.age = 21;
person.city = "LA";





//OBJECTS
//Objects can hold all sorts of data
var junkObject = {
	age: 57,
	color: "purple",
	isHungry: true,
	friends: ["Horatio", "Hamlet"],
	//Another Object
	pet: {
		name: "Rusty",
		species: "Dog",
		age: 2
	}
};

