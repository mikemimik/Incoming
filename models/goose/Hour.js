var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HourSchema = new Schema({
  startTime: Date,
  endTime: Date
});

var Hour = mongoose.model('Hour', HourSchema);

// Export the model and schema to anything requiring it
module.exports = {
  Hour: Hour,
  HourSchema: HourSchema
};