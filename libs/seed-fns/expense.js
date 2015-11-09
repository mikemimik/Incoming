var model = require('../../models/sequel').Expense;

var expense = {
  create: function(callback) {
    console.log('seedfns', 'expense', 'create', 'entry_point');
    models.sequel.Expense.bulkCreate([
      {
        name: 'A - Test Expense',
        description: 'description of testing1 expense',
        cost: 10.00
      },
      {
        name: 'B - Test Expense',
        description: 'description of testing2 expense',
        cost: 20.00
      },
      {
        name: 'C - Test Expense',
        description: 'description of testing3 expense',
        cost: 30.00
      }
    ]).then(function(err, createdModels) {
      console.log('seedfns', 'expense', 'create', 'finish');
      if (err) {
        throw err;
      } else {
        console.log('seedfns', 'expense', 'create', 'callback');
        callback(null, createdModels);
      }
    });
  }
};

module.exports = expense;
