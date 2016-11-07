'use strict'

var express = require('express');
var router = express.Router();

var db = require('../models');

/* GET all Employees. */
router.get('/', function (req, res, next) {

  db.Employee.findAll().then( (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// employ a new Employee at a Company
router.post('/' , function(req, res, next) {
	var company_id = Number(req.body.companyId);

	db.Company.findById(company_id).then( company => {

		db.Employee.create({name: req.body.name}).then( employee => {
			company.addEmployee( employee ).success(
				res.send("Successfully added employee!")
			);
		});

	}).catch(err => {
		console.error(err);
		res.send(err);
	});
});



module.exports = router;
