var express = require('express');
var router = express.Router();

// insert
router.post('/regist', function (req, res) {
    var user = {
      'userid': req.body.userid,
      'name': req.body.name,
      'address': req.body.address
    };
    var query = connection.query('insert into users set ?', user, function (err, result) {
      if (err) {
        console.error(err);
        throw err;
      }
      res.status(200).send('success');
    });
});

  module.exports = router;