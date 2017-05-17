
//Print all number between -10 and 19
//Print all even number between 10 and 40
//Print all odd numbers between 300 and 333
//Print all numbers divisible by 5 AND 3 between 5 and 50

//Question 1
/*
counter_1 = -10;

while(counter <= 19){
	console.log(counter_1);
	counter_1++;
}
*/

//Question 2
/*
counter_2 = 10;

while(counter_2 <= 40){
	if(counter_2 % 2 == 0){
		console.log(counter_2);
	}
	counter_2++;
}
*/

//Question 3
/*
counter_3 = 300;

while(counter_3 <= 333){
	if(counter_3 % 2 != 0){
		console.log(counter_2);
	}
	counter_3++;
}
*/

//Question 4
counter_4 = 5;

while(counter_4 <= 50){
	if(counter_4 % 5 == 0 && counter_4 % 3 == 0){
		console.log(counter_4);
		counter_4++;
	}
}

