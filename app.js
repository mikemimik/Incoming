/// <reference path="typings/node/node.d.ts"/>

var express = require('express'); // NPM
var epilogue = require('epilogue'); // NPM
var bodyParser = require('body-parser'); // NPM
var db = require('./libs/db');
var config = require('./libs/config');

// Initialize Application
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('port', config.app.port);

// Initialize epilogue
epilogue.initialize({
  app: app,
  sequelize: db.sequelize
});

// Models (Sequelize)
var Expense = db.sequelize.import(__dirname + "/models/sequel/Expense");
var ExpenseType = db.sequelize.import(__dirname + "/models/sequel/ExpenseType");
var Hour = db.sequelize.import(__dirname + "/models/sequel/Hour");
var Job = db.sequelize.import(__dirname + "/models/sequel/Job");
var Occurance = db.sequelize.import(__dirname + "/models/sequel/Occurance");
var Payroll = db.sequelize.import(__dirname + "/models/sequel/Payroll");
var Wage = db.sequelize.import(__dirname + "/models/sequel/Wage");

// Models (Mongoose)
// This is too many steps.. fuck this.
var ExpenseSchema = require('./models/goose/Expense').ExpenseSchema;
var ExpenseGoose = db.mongoose.model('Expense', ExpenseSchema);

// Resources (Mongoose)
app.get('/', function(req, res, next) {
  res.send('Hello World :: incoming app');
});

app.get('/goose/expense', function(req, res, next) {
  // TODO
  // - Query mongodb for this resourse
  // - reply with json from database
  ExpenseGoose.find(function(error, docs) { // This find command doesn't work
    console.log('docs: ', docs);
    res.send(docs);
    //res.send('WOAH YOU MADE IT BRO');
  });
});

// Resources (Sequelize)
var expenseResource = epilogue.resource({
  model: Expense,
  endpoints: [ '/sequel/Expense', '/sequel/Expense/:expenseID']
});

var expenseTypeResource = epilogue.resource({
  model: ExpenseType,
  endpoints: [ '/sequel/ExpenseType', '/sequel/ExpenseType/:expenseTypeID']
});

var hourResource = epilogue.resource({
  model: Hour,
  endpoints: [ '/sequel/Hour', '/sequel/Hour/:payrollID']
});

var payrollResource = epilogue.resource({
  model: Payroll,
  endpoints: [ '/sequel/Payroll', '/sequel/Payroll/:payrollID']
});

db.sequelize.sync({ force: true }).then(function() {

  // Populate the mysql database with some test data
  Expense.bulkCreate([
    { name: 'testing1', description: 'description of testing1 expense', cost: 10.00 },
    { name: 'testing2', description: 'description of testing2 expense', cost: 20.00 },
    { name: 'testing3', description: 'description of testing3 expense', cost: 30.00 }
  ]).then(function() {
    // They were created
    console.log('Test mysql data inserted');
  });
}).then(function() {
  // Connect to mongodb
  // Not sure this is the correct location for this
  // Not sure this is necessary
  var dbconn = db.mongoose.connection;
  dbconn.on('error', function() {
    console.log('something fucked up..');
  });
  dbconn.once('open', function (callback) {
    console.log('Connection to the db created');
  });

  // Populate the mongo database with some test data
  var item = new ExpenseGoose({
    name: 'testing1',
    description: 'description of testing1 expense goose',
    cost: 10.00
  });
  item.save();
}).then(function() {
  // Start the server listening on port
  var server = app.listen(app.get('port'), function() {
    console.log('Server started, and listing');
  });
});