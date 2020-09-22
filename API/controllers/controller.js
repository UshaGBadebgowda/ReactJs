const Employee = require('./../models/employee');
const vschema = require('./validate')

exports.getdefault = function(req,res){
 res.send('you are on the root route - controller');
}

exports.getemployees = function(req, res){
  //res.send(data);
  Employee.find({},function(err, results){
  	if(err) res.end(err);
  	res.json(results);
  });
}

exports.addnewemployee = function(req, res){
	const Emp = new Employee();
	const {error} = vschema.validate(req.body);
	if(error) return res.status(400).json({error:error.details[0].message});
    Emp.empName = req.body.empName;
    Emp.empPass = req.body.empPass;
    Emp.save({},function(err,results){
    	if(err) res.end(err);
    	res.end(`Created ${Emp.empName}`)
    });
  /*console.log(`POST success, you sent ${empName} and ${empPass}, thanks!`);
  res.end(`POST success, you sent ${empName} and ${empPass}, thanks!`);*/
}

exports.addnewweight= function(req, res){
	let empName = req.body.empName;
	let empWeight=parseInt(req.body.empWeight);
	Employee.updateOne(
		{empName: empName},
    {$addToSet:
      { employeeWeights :
        {
          empWeight:empWeight
        }
      }
    },
		{upsert: true},
		function(err,doc){
			if(err) {
				return console.log(err);
			}
			else {
			return res.send("We have added record successfully")
		}
	}
	);
};