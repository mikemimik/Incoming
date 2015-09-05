var express = require('express');         // NPM
var epilogue = require('epilogue');       // NPM
var bodyParser = require('body-parser');  // NPM
var db = require('./libs/db');            // CORE
var config = require('./libs/config');    // CORE
var seed = require('./libs/seed');        // CORE

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

// TODO: run method to import all of these into a model object
// TODO: put that method in util.js
// WIP:
// var models = {};
// models.sequel = require('./models/sequel');

var Expense = db.sequelize.import(__dirname + '/models/sequel/Expense');
var ExpenseType = db.sequelize.import(__dirname + '/models/sequel/ExpenseType');
var Hour = db.sequelize.import(__dirname + '/models/sequel/Hour');
var Job = db.sequelize.import(__dirname + '/models/sequel/Job');
var Occurance = db.sequelize.import(__dirname + '/models/sequel/Occurance');
var Payroll = db.sequelize.import(__dirname + '/models/sequel/Payroll');
var Wage = db.sequelize.import(__dirname + '/models/sequel/Wage');

// Models (Mongoose)

// TODO: run method to import all of these into a model object
// TODO: put that method in util.js
var ExpenseSchema = require('./models/goose/Expense').ExpenseSchema;
var ExpenseGoose = db.mongoose.model('Expense', ExpenseSchema);

// Resources (Mongoose)

// TODO: mongoose resources should be in a routes folder
app.get('/', function(req, res, next) {
  res.send('Hello World :: incoming app');
});

app.get('/goose/expense', function(req, res, next) {
  // TODO:
  // - Query mongodb for this resourse
  // - reply with json from database
  ExpenseGoose.find(function(error, docs) {
    // TESTING
    // console.log('docs: ', docs);
    res.send(docs);
  });
});

// Resources (Sequelize)

// TODO: Need to find a way to require these resources instead of
// hanging variables (resource file, and require it?)
var expenseResource = epilogue.resource({
  model: Expense,
  endpoints: [ '/sequel/Expense', '/sequel/Expense/:expenseID' ]
});

var expenseTypeResource = epilogue.resource({
  model: ExpenseType,
  endpoints: [ '/sequel/ExpenseType', '/sequel/ExpenseType/:expenseTypeID' ]
});

var hourResource = epilogue.resource({
  model: Hour,
  endpoints: [ '/sequel/Hour', '/sequel/Hour/:payrollID' ]
});

var jobResource = epilogue.resource({
  model: Job,
  endpoints: [ '/sequel/Job', '/sequel/Job/:jobID' ]
});

var occuranceResource = epilogue.resource({
  model: Occurance,
  endpoints: [ '/sequel/Occurance', '/sequel/Occurance/:occuranceID' ]
});

var payrollResource = epilogue.resource({
  model: Payroll,
  endpoints: [ '/sequel/Payroll', '/sequel/Payroll/:payrollID' ]
});

var wageResourced = epilogue.resource({
  model: Wage,
  endpoints: [ '/sequel/Wage', '/sequel/Wage/wageID' ]
});

db.sequelize.sync({ force: true })
  .then(seed.sequel)
  .then(seed.mongodb)
  .then(function() {
    // Start the server listening on port
    app.listen(app.get('port'), function() {
      console.log('Server started, and listing');
    });
  }
);