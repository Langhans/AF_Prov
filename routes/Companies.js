'use strict'

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


// get all Employees working at the requested Company
router.get('/getEmployees/:id' , function(req,res,next) {
	try{
		var company_id = Number(req.params.id);
	} catch (err){
		res.status(400).send(err);
	}

	db.Company.findById( company_id ).then( company => {
		company.getEmployees().then( employees => {
			res.send(employees);
		});
	}).catch(err => res.send(err));
});



module.exports = router;
