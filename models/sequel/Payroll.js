module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payroll', {
    payrollID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    payDate: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
};
