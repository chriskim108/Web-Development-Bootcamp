//textContent
var p = document.getElementsByTagName("p")[0];
//Will give the result in text
p.textContent;

var ul = document.getElementsByTagName("ul");
//Will give the result's text
ul.textContent

//If we were to do this, it will rewrite the paragraph tag is was assigned to
//The defect in this is that the strong tag will not be in there
//p.textContent = "Corgi mixes are really adorable";





//INNERHTML
//
var p = document.querySelector("p");
//Will give out the result with the strong in it
p.innerHTML;

var ul = document.querySelector("ul");
//Will give out the result with the ul and the li
ul.innerHTML;

//This would rewrite the whole element 
ul.innerHTML = "Plants are awesome";

//This would rewrite the first h1 tag
document.querySelector("h1").textContent = "ENDING";





//Difference

document.body.innerHTML;

document.body.textContent;




