// This idea is the same in C++

//Question 1
var num = 8;
function doMath(){
	num += 1;
	if(num % 5 == 0){
		return true;
	}
	else{
		return false;
	}
}

num += 1;
doMath();
//Result: true


//Question 2
function hi(){
	var name = "Chris";
	console.log(name);
}
function bye(){
	console.log(name);
}

hi();//Chris
bye();//Nothing



