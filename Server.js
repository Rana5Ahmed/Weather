// this code is written through the sessions
const express = require('express')
const cors = require('cors');
const app = express();
const port =8080;
/* Dependencies */
const bodyParser = require('body-parser');
const { response } = require('express');
/* Middleware*/
// Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
app.use(cors()); 

// Reciving data 
projectData={}

// static files 
app.use(express.static("./Website"));

// Extra points  
// INdepanded handleing of files
app.use("/css",express.static(__dirname+"/Website/css"))
app.use("/js",express.static(__dirname+"/Website/js"))
app.use("/index",express.static(__dirname+"/Website/index.html"))


// Get router (Client side code) 
app.get("/all",function (request,response){
    response.send(projectData).status(200).end();
})

//   post router
app.post('/add',function (req,res) {
    console.log(req.body)
    projectData.date=req.body.date,
    projectData.temp=req.body.temp,
    projectData.content=req.body.content
    res.send(projectData).status(200).end();
});
// listen to your port  
    app.listen(port,lisnter)
// function of testing
function lisnter(){
    console.log("server running"); 
    console.log(`running on localhost:http://localhost:${port}`);
}

// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes

// Start up an instance of app

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route