var numOfSqaures = 6;
var colors = generateRandomColors(numOfSqaures);

//Select through the CSS
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =  document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	numOfSqaures = 3;
	colors = generateRandomColors(numOfSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}


});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	numOfSqaures = 6
	colors = generateRandomColors(numOfSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}


});

resetButton.addEventListener("click", function(){
	//Generate all new colors
	colors = generateRandomColors(numOfSqaures);
	//Pick a new random color from array
	pickedColor = pickColor();
	//Change color display to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Colors";
	
	messageDisplay.textContent = ""; 
	//Change color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
})


colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//Add initial colors to squares
	squares[i].style.background = colors[i];
	//Add click listeners to squares
	squares[i].addEventListener("click", function(){
		//Grab Color of clicked square
		var clickedColor = this.style.background;
		//Compare color to pickedColor
		console.log(clickedColor, pickedColor); 
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;    
		}
		else{
			//If incorrect it will change the color to the background of the body color
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}


function changeColors(Color_of_string){
	//Loop through all squares 
	for(var i = 0; i < squares.length; i++){
		//Change each color to match given color
		squares[i].style.background = Color_of_string;
	}
	
}

//This will make it change the rgb on the screen by randomness
function pickColor(){
	//Will produce a random number
	//Math.random() * 6 + 1; //All value from 1-6
	//Math.floor(Math.random() * 6 + 1);//All int value from 1-6
	var random_value = Math.floor(Math.random() * colors.length);
	return colors[random_value];
}

function generateRandomColors(num){
	//Make an array
	var arr = [];
	//Repeat num times
	//Add num random colors to array
	for(var i = 0; i < num; i++){
		//getRandomColor and push into array
		arr.push(randomColor())
	}
	//Return that array
	return arr;
}

function randomColor(){
	//Pick a red, from 0 - 255
	var r = Math.floor(Math.random() * 256)
	//Pick a green, from 0 - 255
	var g = Math.floor(Math.random() * 256)
	//Pick a blue, from 0 - 255
	var b = Math.floor(Math.random() * 256)
	return "rgb(" + r +", " + g + ", " + b + ")";
}






