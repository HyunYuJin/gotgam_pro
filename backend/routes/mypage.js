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
  // console.log(req.session.userid);
  connection.query('SELECT * FROM users WHERE userid = "' + req.session.userid + '"', function (err1, row1) {
    res.send(row1[0]);
    console.log(row1[0]);

    connection.query('SELECT * FROM board INNER JOIN users ON users.id = board.id', function (err2, row2) {
      console.log(row2[0]);
      
    })
  })
});


// router.post('/me', function (req, res, next) {
//   connection.query('SELECT * FROM users WHERE userid = "' + req.session.userid + '"', function (err, row) {
//     res.send(row[0]);
//     console.log(row[0])
//   })
// });

module.exports = router;