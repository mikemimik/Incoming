module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hour', {
    hourID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
