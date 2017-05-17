
//Excercise 1
var num = 1; 
while(num <= 10){
	console.log(num);
	num += 2;
}
//Results: 1,3,5,7,9

//Excercise 2
var num = 1;
while(num <= 20){
	if(num % 4 === 0){
		console.log(num);
	}
	num++;
}
//Results: 4, 8, 12, 16, 20

//Excercise 3
var num = 100;
while(num < 150){
	console.log(num + 1);
	num--;
}
//Results: This will be an infinite loop