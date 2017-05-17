
/*
For Loops Problem Set
1. Print all numbers between -10 and 19
2. Print all even numbers between 10 and 40
3. Print all odd numbers between 300 and 333
4. Print all numbers divisible by 5 AND 3 between 5 and 50
*/

//Excercise 1
/*
for(var i = -10; i <= 19; i++){
	console.log(i);
}
*/

//Excercise 2 
/*
for(var i = 10; i <= 40; i++){
	if(i % 2 == 0){
		console.log(i);
	}
}
*/

//Excercise 3
/*
for(var i = 300; i <= 333; i++){
	if(i % 2 != 0){
		console.log(i);
	}
}
*/

//Excercise 4
for(var i = 5; i <= 50; i++){
	if(i % 5 == 0 && i % 3 == 0){
		console.log(i);
	}
}