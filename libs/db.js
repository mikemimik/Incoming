var mongoose = require('mongoose');
var Sequelize = require('sequelize');
var config = require('./config').database;

// mongoose config
var hosts = config.dialect.nosql.host || [];
var uri = 'mongodb://' + hosts.join(',') + '/' + config.name;
var source = mongoose.connect( uri );

// Sequelize config
var sequelize = new Sequelize(config.name, config.username, config.password, {
  host: config.dialect.sequel.host,
  dialect: config.dialect.sequel.name
});

module.exports = {
  mongoose: mongoose,
  source: source,
  Sequelize: Sequelize,
  sequelize: sequelize
};