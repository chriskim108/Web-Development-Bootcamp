//Use this Javascript on Google.com
//This will only for images

//Getting through the id
var logo = document.querySelector("#hplogo");

//https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg
//https is more secure that http
logo.setAttribute("srcset", "https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg");


logo.style.width = "200px";
logo.style.height = "100px";
logo.style.border = "2px solid purple";





//Selecting a bunch of elements at once and using a loop to manipulate them
var links = document.getElementsByTagName("a"); 
//links.setAttribute //Does not exit, because it only exist in individual elements

//This will show all the things 
for (var i = 0; i < links.length; i++){
	console.log(links[i].textContent)
}

//It will make all the things on the website pink so that it is more visible
for (var i = 0; i < links.length; i++){
	links[i].style.background = "pink";
}

//It will give a border and text color will be orange
for (var i = 0; i < links.length; i++){
	links[i].style.border = "1px dashed purple";
	links[i].style.color = "orange";
}

//Give us a list of all the links
//It will show in the screen all the types of links
for(var i = 0; i < links.length; i++){
	console.log(links[i].getAttribute("href"));
}

//This will make all the "a" tags go to bing.com (It is reassign the href)
for(var i = 0; i < links.length; i++){
	console.log(links[i].setAttribute("href", "http://www.bing.com"));
}

