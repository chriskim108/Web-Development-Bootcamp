//Array Iteration
//Use a for loop to iterate over an array
//Use forEach to iterate over an array
//Compare and contrast for loops and forEach





//For Loop
//To loop over an array using a for loop, we need 
//to make use of the array's length property
var colors = ["Red", "Orange", "Yellow", "Green"];

for (var i = 0; i < colors.length; i++){
	console.log(colors[i]);
}





//ForEach
//Javascript provides an easy built-in way of
//iterating over an array: ForEach
//arr.forEach(someFunction)
var colors = ["Red", "Orange", "Yellow", "Green"];

colors.forEach(function(){
	console.log("Inside the ForEach");
});
//Result: It will print out "Inside the ForEach" 4 times because of the length

//Takes a function as an argument
//coloring_order is printed out
colors.forEach(function(coloring_order){
	//color is a placeholder, call it whatever you want
	console.log(coloring_order);
});
//Results: "Red", "Orange", "Yellow", "Green"





//For vs ForEach
//Both loops will do the same thing




