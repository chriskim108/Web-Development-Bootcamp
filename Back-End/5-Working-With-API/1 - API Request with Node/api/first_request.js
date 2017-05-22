// We want to make a request through this file (Node)
// There are many library and packages that can be used
// The one we are going to use is called "request"
// https://github.com/request/request
// We must "npm install request"

var request = require('request');
// Error: 
// Will hold any potential error we get
// So if there is any problem like internet problems or the server is down, we will get an error
// Inside the request() we can put the API's URL or Website's URL
request('http://www.google.com', function (error, response, body) {
    if(error){
        console.log("Something Went Wrong!!!");
        console.log(error);
    }else{
        //We want to checlk that the statusCode is 200
        //200 represents something specific
        if (response.statusCode == 200) {
            //If we get here then things worked!
            console.log(body) // This will print out the HTML from Google's website
        }
    }
})


