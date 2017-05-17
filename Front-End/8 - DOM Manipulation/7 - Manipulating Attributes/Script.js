var img1 = document.getElementsByTagName("img")[0];

//http://pimm.barkpost.com/wp-content/uploads/2016/04/shiba-inu-corgi-mix.jpg?q=70&fit=crop&crop=entropy&w=808&h=808

//This will update the new image and erasing the previous one (The first image)
img1.setAttribute("src", "http://pimm.barkpost.com/wp-content/uploads/2016/04/shiba-inu-corgi-mix.jpg?q=70&fit=crop&crop=entropy&w=808&h=808");

//This will update the new image and erasing the previous one (The second image)
var img2 = document.getElementsByTagName("img")[1];
img2.setAttribute("src", "https://s-media-cache-ak0.pinimg.com/736x/93/dd/39/93dd39a06ab14ccdc4c2e8bf9471a8e4.jpg");

var a = document.getElementsByTagName("a");
//We need to include the http
a.setAttribute("href", "https://www.petfinder.com/");
//This will change the text
a.textContent = "Link to petfinder";


