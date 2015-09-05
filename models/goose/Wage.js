var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WageSchema = new Schema({
  wageName: String,
  description: String,
  wageRate: Number
});

var Wage = mongoose.model('Wage', WageSchema);

// Export the model and schema to anything requiring it
module.exports = {
  Wage: Wage,
  WageSchema: WageSchema
};