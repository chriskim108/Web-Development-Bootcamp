

//When someone clicks the h1 it will change colors
//Step 1: Select h1
var h1 = document.querySelector("h1");
//Step 2: addEventListener
h1.addEventListener("click", function(){
	alert("h1 was clicked");
})
//When someone clicks on the h1, the alert message will show

//This will change the background of the h1 tag
h1.addEventListener("click", function(){
	h1.style.background = "orange";
})

//If you click on either the ul or li, it will increment that you had clicked the ul
document.querySelector("ul").addEventListener("click", function(){
	console.log("YOU CLICKED THE UL");
});

//Whatever li we select it will change the color to pink
var lis = document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
	lis[i].addEventListener("click", function(){
		//Whatever element was selected, it will refer to "this"
		this.style.color = "pink";		
	});
}


