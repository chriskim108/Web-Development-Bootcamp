// Select all divs and give them a purple background
$("div").css("background", "purple")

// Select the divs with class "highlight" and make them 200px wide -->
//This is specifying all divs with the class of "highlight"
$("div.highlight").css("width", "200px")

//Select the div with id "third" and give it a orange border
$("#third").css("border", "2px solid orange")

//Bonus: Select the first divs only and change its font color to pink
$("div:first-of-type").css("color", "pink")
