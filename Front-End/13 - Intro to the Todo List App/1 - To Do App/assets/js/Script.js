// Check off specific todo by clicking
//If we were to do through JavaScript 
/*
$("li").click(function(){
	// $(this).css("color", "red");
	// $(this).css("text-decoration", "line-through");	
		
	// If li is red
	//This will retrieve the current color
	if($(this).css("color") === "rgb(128, 128, 128)"){
		//turn it black
		$(this).css({
			color: "black",
			textDecoration: "none"
		});
	}
	else{
		// else
		// 	turn it gray
		$(this).css({
			color: "gray",
			textDecoration: "line-through"
		});
	}
});
*/

//Using CSS with it
$("li").click(function(){
	$(this).toggleClass("completed");
});





