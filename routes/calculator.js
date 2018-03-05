var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/add', function(req, res, next) {

  //console.log(`Num1 : ${req.body.num1} , Num2 : ${req.body.num2}`);

  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var ans = parseFloat(num1 + num2);

  //console.log(`Answer : ${ans}`);
  var response = {"answer": ans, "msg" :"Calculation Complate"};

  res.status(201).json(response);
});

router.post('/subtraction', function(req, res, next) {

  //console.log(`Num1 : ${req.body.num1} , Num2 : ${req.body.num2}`);

  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var ans = num1 - num2;

  //console.log(`Answer : ${ans}`);
  var response = {
    "answer": ans,
    "msg" :"Calculation Complate"
  };

  res.status(201).json(response);
});

router.post('/multiplication', function(req, res, next) {

  //console.log(`Num1 : ${req.body.num1} , Num2 : ${req.body.num2}`);

  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var ans = num1 * num2;

  //console.log(`Answer : ${ans}`);
  var response = {"answer": ans, "msg" :"Calculation Complate"};

  res.status(201).json(response);
});

router.post('/divison', function(req, res, next) {

  //console.log(`Num1 : ${req.body.num1} , Num2 : ${req.body.num2}`);

  var num1 = parseFloat(req.body.num1);
  var num2 = parseFloat(req.body.num2);
  var ans = num1 / num2;

  //console.log(`Answer : ${ans}`);
  var response = {"answer": ans, "msg" :"Calculation Complate"};

  res.status(201).json(response);
});

module.exports = router;
