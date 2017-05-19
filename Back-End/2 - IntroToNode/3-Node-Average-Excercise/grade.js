

function average(myArray){
    var total_value = 0;
    
    for(var i = 0; i < myArray.length; i++){
        total_value += myArray[i];
    }
    console.log(Math.round(total_value/myArray.length));
}

var scores_1 = [90, 98, 89, 100, 100, 86, 94];
average(scores_1);

var scores_2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores_2);

