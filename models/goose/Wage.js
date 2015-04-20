var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WageSchema = new Schema({
  wageName: String,
  description: String,
  wageRate: Number
});