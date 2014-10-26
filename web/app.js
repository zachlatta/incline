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

db.connect(dbURL, function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  http.listen(process.env.PORT || 3000, function() {
    console.log('listening on *:3000');
  });
});
