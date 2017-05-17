
//To Do list - We are not connecting this to HTML and CSS yet
//"new" - Add a to do list
//"list" - View all the To do list
//"quit" - Quit App

var To_Do_List = [];
var user_Input = prompt("What would you like to do?");



while(user_Input != "quit"){
	//Handle the input
	if(user_Input == "list"){	
		console.log(To_Do_List);
	}
	else if(user_Input == "new"){
		//Ask for the new to do list
		var New_Data = prompt("Enter new to do");
		//Add to do array
		To_Do_List.push(New_Data);
		console.log(To_Do_List);
	}
	user_Input = prompt("What would you like to do?");
}

console.log("You have quitted the APP");


