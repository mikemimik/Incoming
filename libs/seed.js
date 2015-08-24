// To Do
// - require all the models for each DB
// - find a way to fs read /models/goose and
//   /models/sequel
var fs = require('fs');
var path = require('path');

var modelPath = path.join(__dirname, '..', '/models/goose');
var index = {};

fs.readdirSync(modelPath).forEach(function (file) {
  var splitFile = file.split('.');
  if (splitFile[splitFile.length-1] === 'js') {
    index[splitFile[0]] = require(modelPath + '/' + file)[splitFile[0]];
  }
});

// Testing
console.log('LOOK HERE-> ', index);
process.exit();

module.exports ={
  mongodb: function() {

  },
  sequel: function() {
    index.Expense.bulkCreate([
      { name: 'testing1', description: 'description of testing1 expense', cost: 10.00 },
      { name: 'testing2', description: 'description of testing2 expense', cost: 20.00 },
      { name: 'testing3', description: 'description of testing3 expense', cost: 30.00 }
    ]);
  }
}