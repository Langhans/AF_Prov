var express = require('express');
var router = express.Router();

var db = require('../models');

/* GET all Companies. */
router.get('/', function (req, res, next) {

	db.Company.findAll().then((err, result) => {
		if (err) {
			res.send(err);
		} else {
			res.send(result);
		}
	});
});


router.post('/', function (req, res, next) {

	db.Company.create(req.body).then((err, result) => {

		if (err) {
			console.error(err);
			res.send(err);
		} else {
			console.log("added : " + result);
			res.send(result);
		}
	});
});


// return an array of selected Companies by an array of companyIds
router.post('/list', function (req, res, next) {

	db.Company.findAll({ where: { id: { $in: req.body.ids } } })
		.then((employees) => {
			res.send(employees);
		})
		.catch((err) => {
			res.send(err);
		});
});


router.post('/employ', function (req, res, next) {

	db.Employment.create(req.body).then((result) => {
		res.send(result);
	}).catch((err) => {
		res.send(error);
	})

});

// get employees for selected company-id
router.get('/getEmployees/:id', function (req, res, next) {
	var emp_ids = [];

	db.Employments.findAll({where: { companyId: req.params.id }})
		.then((employments) => {
			new Promise((reject, resolve) => {
				if (employments.length == 0) {
					throw new Error("no employments for Company");
				} else {
					employments.forEach(emp => {
						emp_ids.push(emp.employeeId);
					})
					resolve(emp_ids);
				}
			}).then((ids) => {
				db.Company.findAll({ where: { id: { $in: ids } } })
			})
				.then((employees) => {
					res.send(employees);
				})
				.catch((err) => {
					res.send(err);
				});

		});
});



module.exports = router;