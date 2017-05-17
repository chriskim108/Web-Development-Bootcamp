//This is similar to events in regular javascript
//click()
//When the h1 is clicked then the alert will pop out
$("h1").click(function(){
	alert("h1 is clicked");
});

//When a button is clicked it will change the background color
$("button").click(function(){
	//"this" is the jQuery version
	$(this).css("background", "green");
	var text = $(this).text();
	console.log("You clicked " + text);

})


