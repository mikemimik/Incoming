var config = require('./config');
var mongoose = require('mongoose');

var hosts = config.database.hosts || [];
var string = 'mongodb://' + hosts.join(',') + '/' + config.database.name;
var source = mongoose.connect( string );

module.exports = {
  mongoose: mongoose,
  source: source
};