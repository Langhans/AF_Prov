var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET all Employees. */
router.get('/', function (req, res, next) {

  db.Employee.findAll().then((err, result) => {
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
router.get('/:id'), function (req, res, next) {
  var id_string = req.params.id;
  console.log("Searching for Employee: " + id_string);
  var id = Number( id_string );
  
  db.Employee.findById( id ).then((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

router.post('/list' , function(req,res,next) {

  db.Employee.findAll({ where: { id : { $in: req.body.ids} }})
  .then( (employees) => {
    res.send(employees);
  })
  .catch( (err) => {
    res.send(err);
  });
});

module.exports = router;
