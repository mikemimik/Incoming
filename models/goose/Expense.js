var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  name: String,
  date: Date,
  description: String,
  cost: Number
});