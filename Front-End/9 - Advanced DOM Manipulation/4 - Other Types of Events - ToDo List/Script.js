
//The 2 different types of event we will be looking at 
// Mouse-Over and Mouse-Out

/*
//This is for one li
var first_li = document.querySelector("li");

first_li.addEventListener("mouseover", function(){
	first_li.style.color = "green";
});

first_li.addEventListener("mouseout", function(){
	first_li.style.color = "black";
})
*/


//This one for all the li
var All_li = document.querySelectorAll("li");

for(var i = 0; i < All_li.length; i++){
	All_li[i].addEventListener("mouseover", function(){
		//this.style.color = "green";
		//This will go use the css instead of changing it
		//This will use the attributes of selected
		this.classList.add("selected");
	});
	
	All_li[i].addEventListener("mouseout", function(){
		//this.style.color = "black";
		//This will remove the attributes of selected
		this.classList.remove("selected");
	});
	
	All_li[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});

}