const express= require('express');
const router = express.Router();
const routes = require('./../routes/routes');

const port = 8000;
const api = express();

//
api.use(express.json());
api.use(express.urlencoded({extended:false}));
//
routes(api);
api.use('/', router);
//
api.listen(port, function(){
	console.log("Listening " + port);
});
