
var winning_Number = 7;
var number = prompt("Enter a value ");

if(Number(number) > winning_Number){
	alert("The value is too high");
}
else if(Number(number) < winning_Number){
	alert("The value is too low");
}
else{
	alert("Congrats you have gotten the value");
}


