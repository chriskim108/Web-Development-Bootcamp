
//Question 1
//printReverse() 
//Write a function printReverse() that takes an array as an argument
//and prints out the elements in the array in reverse order (don't 
//actually reverse the array itself)

function printReverse(myArray){
	for(var i = myArray.length; i >= 0; i--){
		console.log(myArray[i]);
	}
}

var ArrayOfInt = [1,2,3,4,5,6,7,8,9];
printReverse(ArrayOfInt);

//Question 2 
//isUniform()
//Write a function isUniform() which takes an array as an arugement
//and returns true if all elements in the array are identical
function isUniform(myArray){
	var init_value = myArray[0];

	for(var i = 1; i < myArray.length; i++){
		if(myArray[i] !== init_value){
		 	return false;
		}
	}
	return true;
}

var ArrayOfInt_1 = [1,1,1,1,1,1,1,1]; //True
var ArrayOfInt_2 = [1,1,1,1,1,2,1,1]; //False
result_1 = isUniform(ArrayOfInt_1);
result_2 = isUniform(ArrayOfInt_2);

 

//Question 3 
//sumArray()
//Write a function sumArray() that accepts an array of numbers and 
//returns the sum of all numbers in the array
function sumArray(myArray){
	var sum_Value = 0;

	for(var i = 0; i < myArray.length; i++){
		sum_Value += myArray[i];
	}
	return sum_Value;
}

var ArrayOfInt_1 = [1,2,3,4,5,6,7,8,9]; //45
var total_1 = sumArray(ArrayOfInt_1);

var ArrayOfInt_2 = [1,2,3,4,5]; //15
var total_2 = sumArray(ArrayOfInt_2);


//Question 4
//max()
//Write a function max() that accepts an array of numbers and
//returns the maximum number in the arrray
function max(myArray){
	var max_value = myArray[0];
	for(var i = 0; i <= myArray.length; i++){
		if(myArray[i] > max_value){
			max_value = myArray[i];
		}
	}
	return max_value;
}

var ArrayOfInt = [2,5,1,7,3,5,34,8,10];
max(ArrayOfInt);