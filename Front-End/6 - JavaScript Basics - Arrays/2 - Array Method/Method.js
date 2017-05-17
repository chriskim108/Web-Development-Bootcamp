//Objective - Learn about the built-in methods
//1 - Push/Pop
//2 - Shift/Unshift
//3 - indexOf
//4 - slice

//Section - 1 (Push and Pop)
//Use push to add to the end of the array
var colors = ["Red", "Orange", "Yellow"];
colors.push("Green");
//["Red", "Orange", "Yellow", "Green"]; this will be our new array

//Use pop to remove the last item in an array
var colors = ["Red", "Orange", "Yellow"];
colors.pop();
//["Red", "Orange"] this will be our new array
var colors = ["Red", "Orange", "Yellow"];
var col = colors.pop();
//col = "Yellow"





//Section - 2 (Shift and Unshift)
//Use unshift to add to the front of an array
var colors = ["Red", "Orange", "Yellow"];
colors.unshift("Blue");
//["Blue", "Red", "Orange", "Yellow"] this is our new array

//Use shift to remove the first item in an array
var colors = ["Red", "Orange", "Yellow"];
colors.shift();
//["Orange", "Yellow"] this is our new array
var col = colors.shift();
//col = Red





//Section - 3(indexOf)
//Use indexOf() to find the index of an item in an array
var friends = ["Charlie", "Liz", "David", "Mattias", "Liz"];
//It will return the first index at which a given element can be found
friends.indexOf("David");//2
friends.indexOf("Liz");//1, not 4

//It will return -1 if the element is not present
friends.indexOf("Hagrid");//-1





//Section - 4(Slice)
//Use slice() to copy parts of an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//Use slice to copy the 2nd and 3rd fruits
//Specify index where the new array starts(1) and ends(3)
var citrus = fruits.slice(1,3);

//This does not alter the original fruits array
//Citrus contains ["Orange", "Lemon"]
//Fruits contains ["Banana", "Orange", "Lemon", "Apple", "Mango"]

//You can also use slice to copy an entire array
var nums = [1,2,3];
var otherNum = nums.slice();
//Both arrays are [1,2,3]







