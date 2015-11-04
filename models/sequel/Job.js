module.exports = function(sequelize, DataTypes) {
  return sequelize.define('job', {
    jobId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    jobName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  });
};
