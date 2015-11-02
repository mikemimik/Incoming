var express = require('express');
var router = express.Router();
var db = require('../libs/db');

var ExpenseSchema = require('../models/goose/Expense').ExpenseSchema;
var ExpenseGoose = db.mongoose.model('Expense', ExpenseSchema);

router.get('/', function(req, res, next) {
  // TODO: check for params
  // if params READ
    // TODO: find document and return
  // if no params LIST
    // TODO: find all documents and return
  ExpenseGoose.find(function(err, docs) {
    res.send(docs);
  });
});

router.post('/', function(req, res, next) {

  // TODO: create new document
});

router.put('/', function(req, res, next) {

  // TODO: update a document
});

module.exports = router;
