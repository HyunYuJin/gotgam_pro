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
      'peoples': req.body.peoples,
      'dayn': req.body.dayn
    };

    connection.query('INSERT INTO regist (maintitle, maincontent, peoples, dayn) VALUES ("' + board.maintitle + '","' + board.maincontent + '","' + board.peoples + '","' + board.dayn + '")', board, function (err, row2) {
        if (err) throw err;

        if(board.maintitle != null && board.maincontent != null && board.peoples != null && board.dayn != null) {
            res.json({
                success: true,
                message: '등록완료'
            })
        } else {
            res.json({
                success: false,
                message: '모두 작성해주세요.'
            })
        }
    });
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
