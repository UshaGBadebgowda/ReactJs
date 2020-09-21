/*const http = require('http');
const hostname = "localhost";
const port = 8000;
const skillserver = http.createServer(function(request, response){
	//mentions request and response cycle.
    response.writeHead(200,{'Content-Type':'text\plain'});
    response.write("Hello from Skillsoft");
    response.end();
});
skillserver.listen(port,hostname); //start server
//console.log("Hello from Skillsoft!");*/


const express= require('express');
const port = 8000;

const api = express();


const data = require('./../Data/data.json');
const path = require('path');
const DIR_DIST = path.join(__dirname, '../dist');
const HTML_STATIC = path.join(DIR_DIST, 'index.html');
api.use(express.json());
api.use(express.urlencoded({extended:false}));
api.use(express.static(DIR_DIST));
api.get('/', function(request,response){ //similar to request mapping
	res.sendFile(HTML_STATIC);
});

api.get('/getemployees', function(request, response){
  response.send(data);
})


api.post('/addEmployee',function(req,res){
	let empName = req.body.empName;
	let empPass = req.body.empPass;
	console.log(`POST success, you sent ${empName} and ${empPass}, thanks!`);
	res.end(`POST success, you sent ${empName} and ${empPass}, thanks! `)
});

//api.get('/', (request,response)=>response.send("Express Hello using fat arrow!!"))
api.listen(port,()=>console.log("Server is running !!")); //Similar to lambda fns in java