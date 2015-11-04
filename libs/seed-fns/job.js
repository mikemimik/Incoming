var job = {
  create: function(model) {
    model.bulkCreate([
      {
        jobName: 'A - Job',
        description: 'Description of Job A'
      },
      {
        jobName: 'B - Job',
        description: 'Description of Job B'
      }
    ]);
  }
}

module.exports = job;
