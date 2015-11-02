/* Summary
 *
 * Create an object that will have each model as a key
 * and it's initialized mongoose self as the value.
 */
var fs = require('fs');
var path = require('path');
var database = require('../libs/db').mongoose;

var routes = {};

fs.readdirSync(__dirname).forEach(function (file) {
  var splitFile = file.split('.');
  var filename = splitFile[0];
  for (var i = 1; i < splitFile.length-1; i++) {
    filename = String.prototype.concat(filename, '.', splitFile[i]);
  }
  var routePath = path.join(__dirname, filename);
  if (splitFile[splitFile.length-1] === 'js' && splitFile[0] !== 'index') {
    routes[splitFile[0]] = require(routePath);
  }
});

module.exports = routes;
