//.text()
//This will give out all the text content on the specific that is selected
// $("h1").text();
// $("ul").text();

//This will will change the text to "New Text!!!"
// $("h1").text("New Text!!!	);


//.html()
//This will update the li
// $("ul").html("<li>I hacked your UL!</li><li>My dog is adorable</li>");
//This will update the 2 li to the anchor tag
// $("li").html("<a href='google.com'>Click on me to go to Google </a>");


//.attr()
//We will use this to get the value's attribute for the first element
// $("img").css("width") //We use this to check the width of the image
// $("img").css("width", "200px");

//This will retrieve the image source
// $("img").attr("src");
//This will update to the new image (All the images)
// $("img").attr("src", "http://i.imgur.com/QMeBVqF.jpg");
// We are choosing the first image source and changing it
// $("img:first-of-type").attr("src", "http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/prance-8.jpg");
//This will return the last element of the given selector
//This will change the last image
// $("img").last().attr("src", "http://cdn3-www.dogtime.com/assets/uploads/gallery/pembroke-welsh-corgi-dog-breed-pictures/side-6.jpg");


//To see what type it is
// $("input").attr("type");
//This will change to the color input
// $("input").attr("type", "color");


//.val()
//This will help us extract the value from an input
// $("input").val();

// $("input").val("Chris Kim");

//This will tell us what has the user selected
// $("select").val()


//.addClass()
//This will take the css style and apply it to the h1
 $("h1").addClass("correct");

//This will remove the css style 
$("h1").removeClass("correct");


$("li").addClass("wrong");
$("li").removeClass("wrong");
$("li").addClass("correct");


$("li").first().toggleClass("done");






