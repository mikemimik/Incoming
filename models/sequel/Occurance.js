module.exports = function(sequelize, DataTypes) {
  return sequelize.define('occurance', {
    occuranceId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  });
};
