//Using CSS with it
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on the "x" to delete the todo
$("span").click(function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});//This will remove the parent element
	event.stopPropagation(); //This will help prevent the event bubbling

});

$("input[type = 'text']").keypress(function(event){
	// The value '13' represents the enter key
	if(event.which === 13){
		// Whatever is inside the textbox it will print it out
		//console.log($(this).val());

		//Grabbing new todo Text from input 
		var todoText = $(this).val();
		//When entering a new input the textbox will clear
		$(this).val("");
		//Create a new li and add to ul 
		// This will take all "ul" and take that string and make a new li with the respected string
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle();
});

//Event Bubbling
//The code below will show and explain how the whole process works
/*
$("ul").click(function(){
	alert("The ul has been clicked");
});

$("#container").click(function(){
	alert("The container has been clicked");
});

$("#body").click(function(){
	alert("The body has been clicked");
});
*/



