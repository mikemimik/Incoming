var fs = require('fs');
var path = require('path');

var seedfns = {};

fs.readdirSync(__dirname).forEach(function(file) {
  var splitFile = file.split('.');
  var seedfnPath = path.join(__dirname, file);
  if (splitFile[splitFile.length-1] === 'js' && splitFile[0] !== 'index') {
    seedfns[splitFile[0]] = require(seedfnPath);
  }
});

module.exports = seedfns;
