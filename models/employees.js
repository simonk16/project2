module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    // eslint-disable-next-line camelcase
    employee_name: DataTypes.STRING,
    updatedAt: DataTypes.DATE,
    createdAt: DataTypes.DATE
  });

  //   Employee.associate = function(models) {
  //     Employee.hasMany(models.Post, {
  //       onDelete: "cascade"
  //     });
  //   };
  return Employee;
};
