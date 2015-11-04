var fs = require('fs');       // NODE
var path = require('path');   // NODE
var util = require('./util'); // CORE
var async = require('async'); // NPM

// Variable definitions
var model_path = {};
var models = {};

// Variable instatiations
model_path.root = path.join(__dirname, '..', '/models');

/** Summary
 *
 * Read root model directory
 * Create model_path_object
 */

// read model root directory
fs.readdir(model_path.root, function(err, files) {

  // for each item found by directory read, perform an action
  files.forEach(function(file) {

    // cur_path is the path of the item being processed
    var cur_path = path.join(model_path.root, file);

    // check to see if current item is a hidden file
    if (!util.isUnixHiddenPath(cur_path)) {

      // get stats about the current item (file or directory?)
      fs.stat(cur_path, function(err, stats) {
        if (err) throw err;

        // check if current item is a directory
        if(stats.isDirectory()) {

          // add directory path to object holding model paths
          model_path[file] = cur_path;

          // require the directory (index.js, will be called)
          models[file] = require(model_path[file]);
        } else {
          // TODO: What to do if there are models in the root directory
        }
      });
    }
  });
/**
 * NOTES:
 * check if it's a directory
 * is: add to model_path (why?)
 * is: models[file] require(model_path[file])
 * not: means models in root directory
 * not: add them to a models object
 * not: instanciate them somehow..
 */
});

// Functions for seeding test data
var seed = {
  init: function() {
    console.log('seed', 'init', 'entry_point');
    async.seq(
      this.sequel.createModels,
      this.sequel.associateModels
    )(function(err, result) {
      console.log('seed', 'init', 'result', result);
    });
  },
  mongodb: {
    createModels: function(callback) {

      // TODO: create seed json file each thing to be seeded
      // TODO: read seed json file and seed db
      console.log('seed', 'mongodb', 'createModels', 'entry_point');
      var item = new models.goose.Expense({
        name: 'A - Test Expense (mongodb)',
        description: 'description of testing expense A',
        cost: 99.99
      });
      item.save();
      item = new models.goose.Expense({
        name: 'B - Test Expense (mongodb)',
        description: 'description of testing expense B',
        cost: 99.99
      });
      item.save();
    }
  },
  sequel: {
    createModels: function(createModels_cb) {
      console.log('seed', 'sequel', 'createModels', 'entry_point');
      async.parallel([
        function(callback) {
          console.log('createModels', 'parallel', 'JobCreate', 'start');

          // INFO: will this need to bind?
          models.sequel.Job.bulkCreate([
            {
              jobName: 'A - Job',
              description: 'Description of Job A'
            },
            {
              jobName: 'B - Job',
              description: 'Description of Job B'
            }
          ]).then(function(err, result) {
            if (err) {
              throw err;
            } else {
              console.log('createModels', 'parallel', 'JobCreate', 'finish');

              // INFO: is this the correct callback?
              callback(null);
            }
          });
        },
        function(callback) {
          console.log('createModels', 'parallel', 'ExpenseCreate', 'start');

          // INFO: will this need to bind?
          models.sequel.Expense.bulkCreate([
            {
              name: 'A - Test Expense',
              description: 'description of testing1 expense',
              cost: 10.00
            },
            {
              name: 'B - Test Expense',
              description: 'description of testing2 expense',
              cost: 20.00
            },
            {
              name: 'C - Test Expense',
              description: 'description of testing3 expense',
              cost: 30.00
            }
          ]).then(function(err, result) {
            if (err) {
              throw err;
            } else {
              console.log('createModels', 'parallel', 'ExpenseCreate', 'finish');
              callback(null);
            }
          });
        },
        function(callback) {

          // INFO: will this need to bind?
          models.sequel.ExpenseType.bulkCreate([
            { name: 'A - Expense Type 1' },
            { name: 'B - Expense Type 2' },
            { name: 'C - Expense Type 3' }
          ]).then(function(err, result) {
            if (err) {
              throw err;
            } else {
              callback(null);
            }
          });
        }
      ], function(err, results) {
        console.log('seed', 'sequel', 'createModels', 'callback', 'fire');
        createModels_cb(null);
      });
      // End of async.parallel
    },
    associateModels: function(associateModels_cb) {
      console.log('seed', 'sequel', 'associateModels', 'entry_point');
      console.log('seed', 'sequel', 'associateModels', 'callback', 'fire');
      associateModels_cb(null);
    }
  }
};

module.exports = seed;
