module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wage', {
    wageID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    wageName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    wageRate: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};