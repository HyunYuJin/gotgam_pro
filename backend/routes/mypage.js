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

// 현재 로그인 중인 사용자의 정보를 보여준다.
router.post('/info', function (req, res) {
  // 비밀번호를 제외한 유저정보를 리턴
  connection.query('SELECT user_id, name, age FROM users WHERE user_id = "' + req.fields.user_id + '"', function (err, row) {
    if (err) throw err;
    else {
      res.send(row[0])
    }
  });
})

// 현재 로그인 중인 사용자가 작성한 게시물의 리스트를 보여준다.
router.post('/', function (req, res) {
  //var id = req.params.id;
  //console.log(id)
  //console.log(req.body.user_id)
  connection.query('SELECT * FROM boards WHERE boards.user_id = "' + req.fields.user_id + '"', function (err, data) {
    if (err) throw err;
    //console.log(data)
    res.send(data);
  })
});

router.post('/update', function (req, res) {
  const user = {
    'user_id': req.fields.userid,
    'password': req.fields.password,
    'name': req.fields.name,
    'age': req.fields.age
  };
  //var id = req.params.id;
  //console.log(id)
  //console.log(req.body.user_id)
  connection.query('UPDATE users SET password = "' + req.fields.password + '", name = "' + req.fields.name + '", age = "' + req.fields.age + '" WHERE user_id = "' + req.fields.user_id + '"', function (err, data) {
    if (err) throw err;
    //console.log(data)
    res.send(data);
  })
});


// router.post('/', function (req, res) {
//   connection.query('SELECT * FROM boards WHERE boards.user_id = "' + req.session.foid + '"', function (err, data) {
//     if (err) throw err;

//     res.send(data);

//   })
// });

router.get('/:id', function (req, res) {
  var id = req.params.id;
  console.log(id)
  connection.query('SELECT * FROM boards WHERE boards.board_id = ' + id, function (err, row) {
    if (err) console.log(err);

    console.log(row[0])

    connection.query('SELECT * FROM day WHERE day.board_id = ' + id, function (err, row1) {
      if (err) console.log(err);

      res.send({
        board: row[0],
        day: row1[0]
      })
    })
  })

});

module.exports = router;