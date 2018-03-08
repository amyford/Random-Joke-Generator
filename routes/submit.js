var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

router.post('/', function(req, res, next) {
  var addedInfo = JSON.stringify(req.body);

  fs.appendFile('contact.txt', addedInfo, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  res.redirect('/finished');

});

module.exports = router;
