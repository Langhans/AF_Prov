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


router.post('/' , function(req,res,next) {
  db.Employee.create(req.body).then( (err,result) => {
    
    if (err){
      console.error(err);
      res.send(err);
    } else{
      console.log("added : " + result);
      res.send(result);
    }
  });
});


// find Employee by id from url-path
router.get("/:id"), function (req, res, next) {

console.log("Search by id entered");
  var id = Number(req.params.id);

  db.Employee.findById( id ).then( (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = router;
