var express = require('express');
var router = express.Router();
var fs = require("fs");
var multer  = require('multer');

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
// router.post('/image', function (req, res) {
//   console.log(req.fields);
//   console.log(req.files);

//   var img = {
//     image: fs.readFileSync(req.files.image.path)
//   };
//   var query = connection.query('INSERT INTO image_test SET ?', img, function(err,
//     result) {
//     console.log(result);
//   });
// });

router.post('/step1', function (req, res) {
  
  console.log(req.fields);
  console.log(req.files);

  // var img = {
  //   image: fs.readFileSync(req.files.image.path)
  // };
  // var query = connection.query('INSERT INTO image_test SET ?', img, function(err,
  //   result) {
  //   console.log(result);
  // });

  const board = {
    title: req.fields.regist.title,
    content: req.fields.regist.content,
    user_id: req.fields.regist.user_id,
    peoples: req.fields.regist.peoples,
    mood: req.fields.regist.mood,
    region_id: req.fields.regist.region_id
  };
  const dayn = req.fields.regist.dayn;
  const day = req.fields.reg;

  var query = connection.query('INSERT INTO boards SET ?', board, function(err,
    result) {
    console.log(result);

    connection.query('SELECT LAST_INSERT_ID() as idd', function(err, row) {
      //console.log(row[0].idd)
      //console.log(req.body.regist.dayn)
      //console.log(day[3])

      for (let i = 1; i <= dayn; i++) {
        console.log(row[0].idd)
        // const dayI = {
        //   day_seq:
        //   title:
        //   content:
        //   traffic:
        //   pay:
        //   board_id:
        // }
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

//   connection.query('INSERT INTO boards (title, content, user_id, peoples, mood, region_id) VALUES ("' + board.title + '","' + board.content + '","' + board.user_id + '","' + board.peoples + '","' + board.mood + '","' + board.region_id + '")', board, function (err, row2) {

//     connection.query('SELECT LAST_INSERT_ID() as idd', function(err, row) {
//       //console.log(row[0].idd)
//       //console.log(req.body.regist.dayn)
//       //console.log(day[3])

//       for (let i = 1; i <= board.dayn; i++) {
//         console.log(row[0].idd)
//         connection.query('INSERT INTO day (day_seq, title, content, traffic, pay, board_id) VALUES ("' + day[i].dayseq + '","' + day[i].daytitle + '","' + day[i].daycontent + '","' + day[i].daytraffic + '","' + day[i].daypay + '","' + row[0].idd + '")', function(err, row3) {
//           if (err) throw err;
//         })
//       }
//     })
    
//     res.json({
//       success: true,
//       message: '등록이 완료되었습니다!'
//     })
//   });
// });

router.get('/', function (req, res) {
  connection.query('SELECT * FROM boards', function(err, data) {
    if (err) throw err;

    res.send(data)

  });
})

router.get('/:id', function (req, res) {
  var id = req.params.id;
  connection.query('SELECT * FROM day WHERE day.board_id = "' + [id] + '"', function(err, row1) {
    if(err) console.log(err);

    res.send(row1[0])
  })
});

router.get('/day/:id', function (req, res) {
  var id = req.params.id;
  connection.query('SELECT * FROM day WHERE day.board_id = "' + [id] + '"', function(err, row) {
    if(err) console.log(err);

    res.send(row)
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
