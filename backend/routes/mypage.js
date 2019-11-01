var express = require('express');
var router = express.Router();

var mysql = require('mysql');
// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root1234',
  database: 'test_crud'
});

// Connect
connection.connect(function (err) {
  if (err) {
    console.error('mysql connection error');
    console.error(err);
    throw err;
  }
});

router.post('/me', function (req, res, next) {
  connection.query('SELECT * FROM users WHERE userid = "' + req.session.userid + '"', function (err, row) {
    res.send(row[0]);
    console.log(row[0])
  })
});

module.exports = router;