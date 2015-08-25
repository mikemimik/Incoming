// To Do
// - require all the models for each DB
// - find a way to fs read /models/goose and
//   /models/sequel
var fs = require('fs');     // NODE
var path = require('path'); // NODE

// Variable definitions
var modelPath = {};
var models = {};

// Variable instatiations
modelPath.root = path.join(__dirname, '..', '/models');

// Function definitions
var getModelFiles = function (models, directory) {
  fs.readdirSync(directory).forEach(function (file) {
    var splitFile = file.split('.');
    if (splitFile[splitFile.length-1] === 'js') {
      models[splitFile[0]] = require(path.join(directory))[splitFile[0]];
    }
  });
}

/* Summary
 *
 * Read root model directory
 * Create model_path_object
 */
fs.readdirSync(modelPath.root).forEach(function (file) {
  // If file is directory, add path to modelPath object
  if (file.split('.').length === 1) {
    modelPath[file] = path.join(modelPath.root, file);
  }
});

// Read through /models/goose directory
// Add each model to the variable models
// This allows access to all the models for seeding

for (var key in modelPath) {
  if (modelPath.hasOwnProperty(key)) {
    var directory = modelPath[key];
    if (key !== 'root') {
      console.log('begin key:', key);
      fs.readdir(directory, function (err, files) {
        console.log('end key:', key);
        process.exit();
      });
    }
  }
}
//process.exit();

fs.readdirSync(modelPath.goose).forEach(function (file) {
  var splitFile = file.split('.');
  if (splitFile[splitFile.length-1] === 'js') {
    models[splitFile[0]] = require(path.join(modelPath.goose, file))[splitFile[0]];
  }
});

// Testing
console.log('LOOK HERE-> ', models);
//process.exit();

// Functions for seeding test data
module.exports ={
  mongodb: function() {

  },
  sequel: function() {
    models.Expense.bulkCreate([
      { name: 'A - Test Expense', description: 'description of testing1 expense', cost: 10.00 },
      { name: 'B - Test Expense', description: 'description of testing2 expense', cost: 20.00 },
      { name: 'C - Test Expense', description: 'description of testing3 expense', cost: 30.00 }
    ]);
    models.ExpenseType.bulkCreate([
      { name: 'A - Expense Type 1' },
      { name: 'B - Expense Type 2' },
      { name: 'C - Expense Type 3' }
    ])
  }
}