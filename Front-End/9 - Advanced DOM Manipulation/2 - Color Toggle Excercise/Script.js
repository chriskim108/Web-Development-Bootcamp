//Change the background color of the body from white -> purple
//As we click the button

var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

button.addEventListener("click", Button_Clicker)

function Button_Clicker(){
	//if white make it purple
	//else make it white
	if(isPurple){
		body.style.background = "white";
		isPurple = false;
	}
	else{
		body.style.background = "purple";
		isPurple = true;
	}

	//Instead of putting the boolean values inside the if-statement
	//We can instead do this:
	//isPurple = !isPurple;
}



