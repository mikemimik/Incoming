var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;

var JobSchema = new Schema({
  jobName: String,
  description: String,
  wages: [ObjectId]
  payroll: ObjectId
});