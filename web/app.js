var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var db = require('../db');

var dbURL = process.env.DATABASE_URL;

if (!dbURL) {
  console.error('Error: DATABASE_URL environment variable not set!');
  process.exit(1);
}

app.use(bodyParser.json());

app.get('/logins', function (req, res) {
  db.Login.findAll().success(function (logins) {
    res.send(logins);
  });
});

app.post('/logins', function (req, res) {
  var login = db.Login.build(req.body);
  login.save().success(function (login) {
    res.send(login);
  });
});

db.connect(dbURL, function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:3000');
  });
});
