/* Summary
 *
 * Create an object that will have each model as a key
 * and it's initialized sequelized self as the value.
 */
var fs = require('fs');
var path = require('path');
var database = require('../../libs/db').sequelize;

var model = {};

fs.readdirSync(__dirname).forEach(function (file) {
  var splitFile = file.split('.');
  var model_path = path.join(__dirname, file);
  if (splitFile[splitFile.length-1] === 'js' && splitFile[0] !== 'index') {
    model[splitFile[0]] = database.import(model_path);
  }
});

// TODO: add associations

model.Job.belongsTo(model.Payroll, { foreignKey: 'payrollId' });
model.Job.hasMany(model.Wage, { foreignKey: 'wageId' });


module.exports = model;
