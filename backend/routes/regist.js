var express = require('express');
var router = express.Router();

var mysql = require('mysql');
// Connection 객체 생성 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root1234',
  database: 'gotgam'
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
    'title': req.body.regist.title,
    'content': req.body.regist.content,
    'user_id': req.body.regist.user_id,
    'peoples': req.body.regist.peoples,
    'mood': req.body.regist.mood,
    'region_id': req.body.regist.region_id,
    'dayn': req.body.regist.dayn
  };

  const day = req.body.reg

  connection.query('INSERT INTO boards (title, content, user_id, peoples, mood, region_id) VALUES ("' + board.title + '","' + board.content + '","' + board.user_id + '","' + board.peoples + '","' + board.mood + '","' + board.region_id + '")', board, function (err, row2) {

    connection.query('SELECT LAST_INSERT_ID() as idd', function(err, row) {
      //console.log(row[0].idd)
      //console.log(req.body.regist.dayn)
      //console.log(day[3])

      for (let i = 1; i <= board.dayn; i++) {
        console.log(row[0].idd)
        connection.query('INSERT INTO day (day_seq, title, content, traffic, pay, board_id) VALUES ("' + day[i].dayseq + '","' + day[i].daytitle + '","' + day[i].daycontent + '","' + day[i].daytraffic + '","' + day[i].daypay + '","' + row[0].idd + '")', function(err, row3) {
          if (err) throw err;
        })
      }
    })
    
    res.json({
      success: true,
      message: '등록이 완료되었습니다!'
    })
  });

});

router.get('/', function (req, res) {
  connection.query('SELECT * FROM boards', function(err, data) {
    if (err) throw err;

    res.send(data)

  });
})

router.get('/:id', function (req, res) {
  var id = req.params.id;

  connection.query('SELECT * FROM boards WHERE boards.board_id = "' + [id] + '"', function (err, row) {
    if(err) console.log(err);

    console.log(row[0])

    connection.query('SELECT * FROM day WHERE day.board_id = "' + [id] + '"', function(err, row1) {
      if(err) console.log(err);

      res.send(row1[0])
    })
  })
});

router.get('/board/:id', function (req, res) {
  var id = req.params.id;

  connection.query('SELECT * FROM boards WHERE boards.board_id = "' + [id] + '"', function (err, row) {
    if(err) console.log(err);

    res.send(row[0])

    // connection.query('SELECT * FROM day WHERE day.board_id = "' + [id] + '"', function(err, row1) {
    //   if(err) console.log(err);

    //   res.send(row1[0])
    // })
  })
});
  
  module.exports = router;
