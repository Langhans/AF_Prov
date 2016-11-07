var express = require('express');
var router = express.Router();

var db = require('../models');

/* GET all Companies. */
router.get('/', function (req, res, next) {

  db.Company.findAll().then( (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});


// add Company
router.post('/' , function(req,res,next) {
  db.Company.create(req.body).then( (err,result) => {
    
    if (err){
      console.error(err);
      res.send(err);
    } else{
      console.log("added : " + result);
      res.send(result);
    }
  });
});


router.post('/employ' , function(req,res,next) {

	try{	
	var body = req.body;
	var compId = Number(body.companyId);
	var empId = Number(body.employeeId);
	} catch (error){
		res.status(400).send(err);
	}
	console.log(body);
	console.log(compId);
	console.log(empId);

			db.Employee.findById(empId)
				.then( employee => {
					console.log(employee);

					if (employee.companyId == null || employee.companyId == undefined){
						db.Employee.setCompany( compId ).then( 		 
							 () => 
								res.send("Successfully employed!")
							);
						
					} else {
						res.status(400).send("Employee already employed!");
					}
				})
				.catch(err => res.send(err)); 
});



// find Company by id from url-path
router.get("/:id"), function (req, res, next) {

console.log("Search by id entered");
  var id = Number(req.params.id);

  db.Company.findById( id ).then( (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = router;
