var model = require('../../models/sequel').ExpenseType;

var expenseType = {
  create: function(callback) {
    console.log('seedfns', 'expenseType', 'create', 'entry_point');
    models.sequel.ExpenseType.bulkCreate([
      { name: 'A - Expense Type 1' },
      { name: 'B - Expense Type 2' },
      { name: 'C - Expense Type 3' }
    ]).then(function(err, createdModels) {
      console.log('seedfns', 'expenseType', 'create', 'finish');
      if (err) {
        throw err;
      } else {
        console.log('seedfns', 'expenseType', 'create', 'callback');
        callback(null, createdModels);
      }
    });
  }
};

module.exports = expenseType;
