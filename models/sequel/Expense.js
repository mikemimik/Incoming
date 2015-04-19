module.exports = function(sequelize, DataTypes) {
  return sequelize.define('expense', {
    expenseID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    cost: {
      type: DataTypes.FLOAT
      allowNull: false
    }
  });
};