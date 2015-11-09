var model = require('../../models/sequel').Job;

var job = {
  create: function(callback) {
    console.log('seedfns', 'job', 'create', 'entry_point');
    model.bulkCreate([
      {
        jobName: 'A - Job',
        description: 'Description of Job A'
      },
      {
        jobName: 'B - Job',
        description: 'Description of Job B'
      }
    ]).then(function(err, createdModels) {
      console.log('seedfns', 'job', 'create', 'finish');
      if (err) {
        throw err;
      } else {
        console.log('seedfns', 'job', 'create', 'callback');
        callback(null, createdModels);
      }
    });
  }
};

module.exports = job;
