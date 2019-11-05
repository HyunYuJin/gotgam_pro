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

    const day = {
      'daytitle': req.body.daytitle,
      'daycontent': req.body.daycontent,
      'daytraffic': req.body.daytraffic,
      'dayfood': req.body.dayfood,
      'daypay': req.body.daypay
    }

    connection.query('INSERT INTO boards (maintitle, maincontent, userid, peoples, dayn) VALUES ("' + board.maintitle + '","' + board.maincontent + '","' + req.session.foid + '","' + board.peoples + '","' + board.dayn + '")', board, function (err, row2) {

      connection.query('SELECT LAST_INSERT_ID() as idd', function(err, row) {
        console.log(row[0].idd)

        connection.query('INSERT INTO day (daytitle, daycontent, daytraffic, dayfood, daypay, boardid) VALUES ("' + day.daytitle + '","' + day.daycontent + '","' + day.daytraffic + '","' + day.dayfood + '","' + day.daypay + '","' + row[0].idd + '")', function(err, row3) {
          if (err) throw err;
        })
      })
      
      res.json({
        success: true,
        message: '등록이 완료되었습니다!'
      })
    });

    // connection.query('INSERT INTO day (daytitle) VALUES ("' + day.daytitle + '") WHERE boardid = ' + sql, function(err, row) {
    //   if (err) throw err;

    //   res.json({
    //     success: true,
    //     message: '등록쓰'
    //   })
    // })

});

router.get('/list', function (req, res) {
  connection.query('SELECT * FROM boards INNER JOIN users WHERE boards.userid = users.id', function(err, data) {
    if (err) throw err;

    if(data != null) {
        console.log(data)
        res.send(data)
        // res.json({
        //     message: '가져왔다.',
        //     data: data
        // })
    } else {
        // res.json({
        //     message: '못가져왔다.'
        // })
    }
      
  });
})
  
  module.exports = router;
