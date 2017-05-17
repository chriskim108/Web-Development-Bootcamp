
/*
Question 1
Write a function isEven() which takes a single numeric
argument and returns true if the number is even, and false otherwise
*/
function isEven(num){
	if (num % 2 == 0){
		return true;
	}
	else{
		return false;
	}
}
isEven(2);
isEven(3);

/*
Question 2
Write a function factorial() which takes a single numeric argument
and returns the factorial of that number
*/
function factorial(num){
	var answer = 1;
	for(var i = 1; i <= num; i++){
		var temp = i;
		answer *= i;
	}

	return answer;
}

factorial(3);
factorial(4);

/*
Question 3
Write a function kebabToSnake() which takes a single kebab-cased
string argument and returns the snake_cased version
Example:
	kebabToSnake("hello-world") //"hello_world"
Basically we should learn to research on how to replace "-" to "_" 
http://www.w3schools.com/jsref/jsref_replace.asp
*/
function kebabToSnake(Word){
	var Result = Word.replace("-", "_");
	return Result;
}

kebabToSnake("Hello-world");
kebabToSnake("Yo-Man");








