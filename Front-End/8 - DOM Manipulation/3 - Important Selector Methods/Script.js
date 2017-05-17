
//Getting an element respect to its ID
var tag = document.getElementById("highlight");
//console.dir(tag) to check 





//Getting an element respect to its Class
var tags = document.getElementsByClassName("bolded");
//Result: List of 2 class
//Node List (Lightweight array)
//We will not be able to use a forEach loop





//Getting an element respect to its Tag
var tags = document.getElementsByTagName("li");
console.log(tag[0]);
//We can use this for any element: h1, body, etc
//
var body = document.getElementsByTagName("body")[0]
body





//QuerySelector we can do everything we had done above
//Takes a CSS-style selector and select that one

//This one is for id
var tag = document.querySelector("#highlight");

//This one if for classes
//It will only select one - The very first one
var tag = document.querySelector(".bolded");

//Tag Name
var tag = document.querySelector("h1");

//Example:
//Select all anchortags inside of an li with a class of special
var tag = document.querySelector("li a.special");





//QuerySelectorAll
//Takes a CSS-style selector and select all the matching elements

//This will select all the h1 elements
var tag = document.querySelectorAll("h1");
//This will select all the id with the name "highlight"
var tag = document.querySelectorAll("#highlight");
//This will select all the class with the name "bolded"
var tag = document.querySelectorAll(".bolded");




