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

router.post('/info', function (req, res) {
  connection.query('SELECT * FROM users WHERE id = "' + req.session.foid + '"', function (err1, row1) {
    if (err1) throw err1;
    else {
      // console.log(row1[0].id);
      res.send(row1[0])
    }
  });

})

router.post('/me', function (req, res) {
  connection.query('SELECT * FROM boards WHERE boards.userid = "' + req.session.foid + '"', function (err, data) {
    if (err) throw err;

    else {
      res.send(data);
    }

  })
});

router.get('/me:id', function (req, res) {
  var id = req.params.id;
  var sql = "SELECT * FROM board WHERE id = ?";

  connection.query(sql, [id], function(err, row) {
    if(err) console.error(err);
    
    else {
      // res.send(row[0]);
      console.log(row[0])
    }
  });

});

module.exports = router;