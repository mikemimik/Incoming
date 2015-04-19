module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expenseType', {
    expenseTypeID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  });
};