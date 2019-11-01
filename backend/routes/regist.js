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
      'maintitle': req.body.maintitle,
      'maincontent': req.body.maincontent,
      'peoples': req.body.peoples
    };

    connection.query('SELECT idx FROM users WHERE userid = "' + req.session.userid + '"', function(err, row){
      console.log(row[0].idx)

      if(row[0].idx != null) {
        connection.query('INSERT INTO regist (maintitle, maincontent, peoples) VALUES ("' + board.maintitle + '","' + board.maincontent + '","' + board.peoples + '")"' + '" WHERE idx = "' + row[0].idx + '"' , board, function (err, row2) {
          console.log(row2)
          
        });
      } else {
        console.log(err + '로그인 후 등록가능')
      }

    })
  });

  router.get('/list', function (req, res) {
      connection.query('SELECT maintitle FROM regist', function(err, data) {
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
  
  module.exports = router;
