var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.SchemaTypes.ObjectId;

var JobSchema = new Schema({
  jobName: String,
  description: String,
  wages: [ObjectId],
  payroll: ObjectId
});

var Job = mongoose.model('Job', JobSchema);

// Export the model and schema to anything requiring it
module.exports = {
  Job: Job,
  JobSchema: JobSchema
};