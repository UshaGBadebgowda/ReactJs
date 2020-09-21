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
api.use(express.json());
api.use(express.urlencoded({extended:false}));
api.get('/', function(request,response){ //similar to request mapping
	res.send("Hello from Skillsoft express");
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