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

// Require routes
var routes = require('./routes');

// Set Mongoose API endpoints
app.use('/goose/expense', routes.expense);

// TODO: create router file for each mongodb endpoint
// app.use('/goose/expenseType', routes.expenseType);
// app.use('/goose/hour', routes.hour);
// app.use('/goose/job', routes.job);
// app.use('/goose/occurance', routes.occurance);
// app.use('/goose/payroll', routes.payroll);
// app.use('/goose/wage', routes.wage);

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
// INFO: not needed here, inclused in each route
var ExpenseSchema = require('./models/goose/Expense').ExpenseSchema;
var ExpenseGoose = db.mongoose.model('Expense', ExpenseSchema);

// Resources (Mongoose)

// TODO: mongoose resources should be in a routes folder
app.get('/', function(req, res, next) {
  res.send('Hello World :: incoming app');
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

db.sequelize
  .sync({ force: true })
  .then(seed.init)
  .then(seed.mongodb)
  .then(function() {
    // Start the server listening on port
    app.listen(app.get('port'), function() {
      console.log('Server started, and listing');
    });
  }
);
