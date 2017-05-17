//.fadeOut()
//If the button is clicked then the div will fade out
/*
$("button").on("click", function(){
	//This will make our boxes fade out 
	$("div").fadeOut(1000, function(){
		//By the time the fadeout is finished it will console.log this
		console.log("Fade Completed!");
		//Once the thing is faded out, it will remove the squares
		$(this).remove();
	});
	
})
*/


//.fadeIn()
/*
$("button").on("click", function(){
	//This will make our boxes fade out 
	$("div").fadeIn(1000, function(){
		//By the time the fadeout is finished it will console.log this
		console.log("Fade Completed!");
		//Once the thing is faded out, it will remove the squares
	});
	
})
*/


//.fadeToggle()
//When it is already displayed it will fadeout
//When it is already undisplayed it will fadein
/*
$("button").on("click", function(){
	$("div").fadeToggle(500);
})
*/


//.slideDown()
/*
$("button").on("click", function(){
	$("div").slideDown(500);
})
*/

//.slideUp()
/*
$("button").on("click", function(){
	$("div").slideUp(500);
})
*/

//.slideToggle()
$("button").on("click", function(){
	$("div").slideToggle(1000, function(){
		console.log("Slide is Done");
		$(this).remove();
	});
})

