var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HourSchema = new Schema({
  startTime: Date,
  endTime: Date
});