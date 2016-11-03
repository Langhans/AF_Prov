var express = require('express');
var router = express.Router();

var db = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {

  db.Employee.find({}).then( (err,  result) => {
    if (err ) res.send(err);
    res.send(result);
  }
  );

});

module.exports = router;
