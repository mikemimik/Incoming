var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PayrollSchema = new Schema({
  startDate: Date,
  endDate: Date,
  payDate: Date
});

var Payroll = mongoose.model('Payroll', PayrollSchema);

// Export the model and schema to anything requiring it
module.exports = {
  Payroll: Payroll,
  PayrollSchema: PayrollSchema
};