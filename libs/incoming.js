var express = require('express'); // NPM
var epilogue = require('epilogue'); // NPM
var bodyParser = require('body-parser'); // NPM
var db = require('./libs/db');
var config = require('./libs/config').app;

// Initialize Application
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', config.port);

// Initialize epilogue
epilogue.initialize({
  app: app,
  sequelize: db.sequelize
});

// Models
var Payroll = db.sequelize.import(__dirname + "/models/sequel/Payroll");

// Resource
var payrollResource = epilogue.resource({
  model: Payroll,
  endpoints: [ '/payroll', '/payroll/:payrollID']
});