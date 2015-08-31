/* Summary
 *
 * Create an object that will have each model as a key
 * and it's initialized mongoose self as the value.
 */
var fs = require('fs');
var path = require('path');
var database = require('../../libs/db').mongoose;

var models = {};

fs.readdirSync(__dirname).forEach(function (file) {
  var splitFile = file.split('.');
  var model_path = path.join(__dirname, splitFile[0]);
  if (splitFile[splitFile.length-1] === 'js' && splitFile[0] !== 'index') {
    models[splitFile[0]] = require(model_path)[splitFile[0]];
  }
});

module.exports = models;