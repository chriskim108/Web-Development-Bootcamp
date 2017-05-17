// This idea is the same in C++

//Example 1 - Scope
function doMath(){
	var x = 40;
	console.log(x);
}
doMath();

//Example 2 - Global Scope
var y = 99;//Global Scope
function doMoreMath(){
	console.log(y);
}
doMoreMath();