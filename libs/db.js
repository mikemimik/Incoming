//var mongoose = require('mongoose');
var Sequelize = require('sequelize');
var config = require('./config').database;

// mongoose config
//var hosts = config.database.hosts || [];
//var string = 'mongodb://' + hosts.join(',') + '/' + config.database.name;
//var source = mongoose.connect( string );

// Sequelize config
var sequelize = new Sequelize(config.name, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
});

module.exports = {
//  mongoose: mongoose,
//  source: source,
  Sequelize: Sequelize,
  sequelize: sequelize
};