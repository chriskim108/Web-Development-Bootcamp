
/*
Version 1
	Ask the user "Are we there yet"
	Keep asking again and again until they enter "yes" OR "yeah"
	Then, alert "Yay, we finally made it!"
*/
/*
var question = prompt("Are we there yet? ");

while(question != "yes" && question != "yeah"){
	question = prompt("Are we there yet? ");
}

alert("Yay we finally made it!");
*/


/*
Version 2
	Ask the user "Are we there yet"
	Keep asking again and again until they enter "yes" OR "yeah"
	Then, alert "Yay, we finally made it!"
	Bonus: A user can enter any straing as long as it "yes" in it
*/

/*
var word = "Hello World";
//This will give the indexing value of that word or string
//This will traverse the array and find the matching character or string
//If the result = -1 then it means it is not there
word.indexOf("Wor");
*/


var question = prompt("Are we there yet? ");

while(question.indexOf("yes") === -1){
	question = prompt("Are we there yet? ");
}

alert("Yay we finally made it!");