var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var request = require('request');

var options = {
  url: 'https://icanhazdadjoke.com/',
  headers: {
    'Accept': 'application/json'
  },
  json: true
};
router.get('/', function(req, res, next) {

  request(options, function (error, response, body) {
    if (error) {
      res.send('There has been an error');
    }
      res.send(body.joke);
  });
});

module.exports = router;
