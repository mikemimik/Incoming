var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OccuranceSchema = new Schema({
  name: String
});

var Occurance = mongoose.model('Occurance', OccuranceSchema);

// Export the model and schema to anything requiring it
module.exports = {
  Occurance: Occurance,
  OccuranceSchema: OccuranceSchema
};