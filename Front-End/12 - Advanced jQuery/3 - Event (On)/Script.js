//The on() is the most used event 


$("h1").on("click", function(){
	$(this).css("color", "purple");
});

//Everytime a character is inputed the "keypressed" will pop out
$("input").on("keypress", function(){
	console.log("keypressed");
});

//If the mouse has hovered over the buttons, then the text will be bolded 
$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
});

//If the mouse has hovered over the buttons, then the text will be back to normal 
$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
});


