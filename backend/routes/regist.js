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

router.post('/step1', function (req, res) {
    const board = {
      'maintitle': req.body.maintitle
    };

    connection.query('INSERT INTO boards (maintitle) VALUES("' + board.maintitle + '")', board, function (err, row2) {
      if (err) throw err;
      else {
        console.log(board.maintitle)
      }
    });

});

router.get('/list', function (req, res) {
  connection.query('SELECT * FROM boards INNER JOIN users', function(err, data) {
    if (err) throw err;

    if(data != null) {
        console.log(data)
        res.json({
            message: '가져왔다.',
            data: data
        })
    } else {
        res.json({
            message: '못가져왔다.'
        })
    }
      
  });
})

  // router.get('/list', function (req, res) {
  //     connection.query('SELECT maintitle FROM regist', function(err, data) {
  //       if (err) throw err;

  //       if(data != null) {
  //           console.log(data)
  //           res.json({
  //               message: '가져왔다.',
  //               data: data
  //           })
  //       } else {
  //           res.json({
  //               message: '못가져왔다.'
  //           })
  //       }
          
  //     });
  // })
  
  module.exports = router;
