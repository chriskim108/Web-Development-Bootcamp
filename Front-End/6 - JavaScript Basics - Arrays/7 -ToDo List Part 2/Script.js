
//To Do list - We are not connecting this to HTML and CSS yet
//"new" - Add a to do list
//"list" - View all the To do list
//"quit" - Quit App
//delete" - Remove Specific To do

var To_Do_List = ["Buy a new turtle"];
var user_Input = prompt("What would you like to do?");

//This is cleaned up much better
while(user_Input != "quit"){
	//Handle the input
	if(user_Input === "list"){	
		listToDo();
	}
	else if(user_Input === "new"){
		addToDo();
	}
	else if(user_Input === "delete"){
		deleteToDo();
	}
	user_Input = prompt("What would you like to do?");
}

console.log("You have quitted the APP");

//Like C++ we can just put all the functions in the top or bottom
function listToDo(){
	console.log("**********");
	To_Do_List.forEach(function(to_do, index){
		console.log(index + ": " + to_do);
	})
	console.log("**********");
}

function addToDo(){
	//Ask for the new to do list
	var New_Data = prompt("Enter new to do");
	//Add to do array
	To_Do_List.push(New_Data);
	console.log(To_Do_List);
	console.log("Added to_do");
}

function deleteToDo(){
	//Ask for index of to_do to be deleted
	var index_value = prompt("Enter the index of to_do to delete");
	//Delete that todo
	//This will remove the specific part we wish to delete	
	To_Do_List.splice(index_value, 1);
	console.log(index_value + " have been deleted");
}
