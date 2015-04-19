module.exports = function(sequelize, DataTypes) {
  return sequelize.define('occurance', {
    occuranceID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  });
};