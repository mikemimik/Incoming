var fs = require('fs');     // NODE
var path = require('path'); // NODE

// Variable definitions
var modelPath = {};
var models = {};

// Variable instatiations
modelPath.root = path.join(__dirname, '..', '/models');

/** Summary
 *
 * Read root model directory
 * Create model_path_object
 */
fs.readdirSync(modelPath.root).forEach(function (file) {
  // If item is directory, add path to modelPath object
  if (file.split('.').length === 1) {
    modelPath[file] = path.join(modelPath.root, file);
    models[file] = require(modelPath[file]);
  }
});

// Read through /models/goose directory
// Add each model to the variable models
// This allows access to all the models for seeding

// // Get mongoose models
// fs.readdirSync(modelPath.goose).forEach(function (file) {
//   var splitFile = file.split('.');
//   if (splitFile[splitFile.length-1] === 'js') {
//     models.goose[splitFile[0]] = require(path.join(modelPath.goose, file))[splitFile[0]];
//   }
// });

// // Get sequel models
// fs.readdirSync(modelPath.sequel).forEach(function (file) {
//   var splitFile = file.split('.');
//   if (splitFile[splitFile.length-1] === 'js') {
//     models.sequel[splitFile[0]] = require(path.join(modelPath.sequel, file));
//   }
// });

// Functions for seeding test data
module.exports = {
  mongodb: function() {
    var item = new models.goose.Expense({
      name: 'testing thing',
      description: 'fuck eh, mate',
      cost: 99.99
    });
    item.save();
  },
  sequel: function() {
    models.sequel.Expense.bulkCreate([
      { name: 'A - Test Expense', description: 'description of testing1 expense', cost: 10.00 },
      { name: 'B - Test Expense', description: 'description of testing2 expense', cost: 20.00 },
      { name: 'C - Test Expense', description: 'description of testing3 expense', cost: 30.00 }
    ]);
    models.sequel.ExpenseType.bulkCreate([
      { name: 'A - Expense Type 1' },
      { name: 'B - Expense Type 2' },
      { name: 'C - Expense Type 3' }
    ]);
  }
}