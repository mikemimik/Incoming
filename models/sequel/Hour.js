module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hour', {
    hourID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });
};