
//Question 1
var someObject = {};

//Which of the following are valid:

someObject._name = "Hedwig"; //Valid

someObject.age = 6; //Valid

var prop = "color"
someObject[prop] = "red";//Valid

someObject.123 = true; //Not Valid





//Question 2
var someObject{
	friends:[
		{name: "Malfoy"},
		{name: "Crabbe"},
		{name: "Goyle"},
	],
	color: "baby blue",
	isEvil: true
};
//Write a code to retrieve "Malfoy" from someObject

someObject.friends[0].name //"Malfoy"







