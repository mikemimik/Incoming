var fs = require('fs');
var path = require('path');

module.exports = {
  /**
   * getAllModels() returns an object containing
   * key value pairs which are the model set with
   * the corresponding models
   *
   * @return { key: value [, ... ] }
   */
  getAllModels: function () {
    var modelPath = {};
    var models = {};
    modelPath.root = path.join(__dirname, '..', '/models');
    fs.readdirSync(modelPath.root).forEach(function (file) {
      if (file.split('.').length === 1) {
        modelPath[file] = path.join(modelPath.root, file);
        models[file] = require(modelPath[file]);
      }
    });
    return models;
  }
};