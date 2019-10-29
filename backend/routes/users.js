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

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('서버 넘어와싸');
});

router.post('/signUp1', function (req, res) {
  const user = {
    'userid': req.body.userid,
    'name': req.body.name,
    'password': req.body.password
  };
  connection.query('SELECT userid FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
    if (row[0] == null) { //  동일한 아이디가 없을경우,
      connection.query('INSERT INTO users (userid, name, password) VALUES ("' + user.userid + '","' + user.name + '","' + user.password + '")', user, function (err, row2) {
        if (err) throw err;
      });
      res.json({
        success: true,
        message: 'Sing Up Success!'
      })
    } else {  //동일한 아이디가 있을경우
      res.json({
        success: false,
        message: 'Sign Up Failed Please use anoter ID'
      })
    }
  });

});

router.post('/login1', function (req, res) {
  const user = {
    'userid': req.body.userid,
    'password': req.body.password
  };
  connection.query('SELECT userid, password, name FROM users WHERE userid = "' + user.userid + '"', function (err, row) {
    if (row[0] == null) {
      res.json({ // 매칭되는 아이디 없을 경우
        success: false,
        message: 'Login failed please check your id'
      })
    } else if (row[0].password == user.password) {
      res.json({ // 로그인 성공 
        name:row[0].name,
        success: true,
        message: 'Login successful!'
      })
    } else {
      res.json({ // 매칭되는 아이디는 있으나, 비밀번호가 틀린 경우 
        success: false,
        message: 'Login failed please check your password!'
      })
    }
  })

});

module.exports = router;
