//High order function

//Example 1
//Can we pass functions to other functions? Yes

function sing(){
	console.log("Twinkle Twinkle...");
	console.log("how i wonder...");
}

//This is a built-in function
//The sing is the function
//The 1000 is the interval in milliseconds
//This will play the Twinke Twinke in a loop until it is commanded to stop
setInterval(sing, 1000);
//If we were to stop this loop we will need
//clearInterval(# that was given)

//This is an alternatie method to do this if we don't want to make the function
//This will run every 2 seconds
setInterval(function(){
	console.log("I am an anonymous function");
	console.log("This is Awesome!");
}, 2000)



