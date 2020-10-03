var express = require('express');
var router = express.Router();
var connection = require('../config/connection');


/* GET home page. */
router.get('/', function(req, res, next) { 

  connection.query('SELECT * FROM emp',function (err,rows) {

    if (err) throw err;
      console.log(rows);

      res.render('table', {emp:rows});
  })

});

module.exports = router;


