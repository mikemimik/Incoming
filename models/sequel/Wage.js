module.exports = function(sequelize, DataTypes) {
  return sequelize.define('wage', {
    wageId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
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
