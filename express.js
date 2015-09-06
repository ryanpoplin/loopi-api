var express = require('express');
var mongoskin = require('mongoskin');
var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(logger('dev'));

var db = mongoskin.db('@localhost:27017/test', {
  safe: true
});

app.param('collectionName', function (req, res, next, collectionName) {
  req.collection = db.collection(collectionName);
  return next();
});

app.get('/', function (req, res, next) {
  res.send('Please, select a collection, e.g., /collections/messages');
});
