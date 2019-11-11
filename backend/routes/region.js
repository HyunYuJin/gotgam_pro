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

router.get('/:id', function (req, res) {
  var id = req.params.id;
  console.log(id + "get")

  connection.query('SELECT * FROM region WHERE region.region_id = "' + [id] + '"', function (err, row) {
    if(err) console.log(err);
    
    res.send(row[0])
  })
});
router.get('/detail/:id', function (req, res) {
  var id = req.params.id;
  console.log(id + "get")

  connection.query('SELECT * FROM region_explanation WHERE region_id = "' + [id] + '"', function (err, row) {
    if(err) console.log(err);
    
    res.send(row)
  })
});

router.get('/search/desc/:id', function (req, res) {
  var id = req.params.id;

  connection.query('SELECT * FROM boards WHERE boards.region_id = "' + [id] + '" ORDER BY rate DESC', function (err, row) {
    if(err) console.log(err);

    res.send(row)
    //console.log(row);
  })
});

router.get('/search/:id', function (req, res) {
  var id = req.params.id;

  connection.query('SELECT * FROM boards WHERE boards.region_id = "' + [id] + '"', function (err, row) {
    if(err) console.log(err);

    res.send(row)
    //console.log(row);
  })
});

router.get('/search/region_board/:id', function (req, res) {
  var id = req.params.id;

  connection.query('SELECT * FROM region_board WHERE region_id = "' + [id] + '"', function (err, row) {
    if(err) console.log(err);

    res.send(row)
    //console.log(row);
  })
});

module.exports = router;
