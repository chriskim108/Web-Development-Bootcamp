// Suppose I wanted to model a group of friends
//This is very problematics because the code is being repeated
var friend1 = "Charlie";
var friend2 = "Amy";
var friend3 = "David";
var friend4 = "Matthias";
//This is a better altervative
var friends = ["Charlie", "Amy", "David", "Matthias"]
//An array indexing starts at 0





//ACCESSING THE ARRAY AND USING IT FOR STRING CONCENTATION
//When using an array we can also use it for string concentation
console.log(friends[0]); //"Charlie"
friends[1] + " <3 " + friends[2]; //"Amy <3 David"





//UPDATING ARRAYS
//What if we wanted to update the array values?
var friends = ["Charlie", "Amy", "David", "Matthias"];
//If Charlie wanted to change his name to "Chuck"
friends[0] = "Chuck";
//The Array will look like this
//var friends = ["Chuck", "Amy", "David", "Matthias"]




//ADDING NEW VALUES OR DATA TO THE EXISTING ARRAY
var friends = ["Charlie", "Amy", "David", "Matthias"];
//Here we add a new data "Amelie" and it is index 4
friends[4] = "Amelie";

//What if I added not next to exist data, Example:
friends[10] = "Young";
//Result: ["Charlie", "Amy", "David", "Matthias", "Amelie", undefined × 5, "Young"]
//We would have 5 empty(undefined) memory blocks (spaces)





//NOTES
//Define an emptry array
var friends = []; //No friends
//Alternative
var friends = new Array(); //This is uncommon

//Array can hold any type of data
//Also we can put them all in one array
var random_collection = [49, true, "Hermione", null];

//Array have a length property, this will tell us the length of the array
var nums = [45,37,89,24];
nums.length; //4