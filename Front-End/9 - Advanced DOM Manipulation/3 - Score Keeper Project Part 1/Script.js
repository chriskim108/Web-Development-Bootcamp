
// Selecting
var p1_button = document.querySelector("#p1");
var p2_button = document.querySelector("#p2");
var reset_button = document.querySelector("#reset");
var p1_display = document.querySelector("#p1_display");
var p2_display = document.querySelector("#p2_display");
var num_Input = document.querySelector("input");
var p = document.querySelector("p");
//Select a span inside a paragraph
var winningScoreDisplay = document.querySelector("p span");

var p1_score = 0;
var p2_score = 0;
var GameOver = false;
var winning_score = 5;
//Getting the input value
var input = document.querySelector("input");

// Player 1 Button
p1_button.addEventListener("click", function(){
	if(!GameOver){
		p1_score++;
		if(p1_score == winning_score){
			p1_display.classList.add("winner");
			console.log("Game Over");
			GameOver = true;
		}
		p1_display.textContent = p1_score;
	}


});

// Player 2 Button
p2_button.addEventListener("click", function(){
	if(!GameOver){
		p2_score++;
		if(p2_score == winning_score){
			p2_display.classList.add("winner");
			console.log("Game Over");
			GameOver = true;
		}
		p2_display.textContent = p2_score;
	}
});

// Reset Button
reset_button.addEventListener("click", function(){
	p1_score = 0;
	p2_score = 0;

	p1_display.textContent = p1_score;
	p2_display.textContent = p2_score;

	p1_display.classList.remove("winner");
	p2_display.classList.remove("winner");

	GameOver = false;
	
});

//Inputing the number value
num_Input.addEventListener("change", function(){
	winningScoreDisplay.textContent = num_Input.value;
	winning_score = num_Input.value;
});