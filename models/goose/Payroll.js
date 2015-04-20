var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PayrollSchema = new Schema({
  startDate: Date,
  endDate: Date,
  payDate: Date
});