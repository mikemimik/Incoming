var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ExpenseSchema = new Schema({
  name: String,
  date: { type: Date, default: Date.now },
  description: String,
  cost: Number
});

var Expense = mongoose.model('Expense', ExpenseSchema);

// Export the model to anything requiring it
module.exports = {
  Expense: Expense,
  ExpenseSchema: ExpenseSchema
};