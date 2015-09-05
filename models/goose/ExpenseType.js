var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseTypeSchema = new Schema({
  name: String
});

var ExpenseType = mongoose.model('ExpenseType', ExpenseTypeSchema);

// Export the model and schema to anything requiring it
module.exports = {
  ExpenseType: ExpenseType,
  ExpenseTypeSchema: ExpenseTypeSchema
};