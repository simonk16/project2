module.exports = function(sequelize, DataTypes) {
  var Employee = sequelize.define("Employee", {
    name: DataTypes.STRING
  });

  //   Employee.associate = function(models) {
  //     Employee.hasMany(models.Post, {
  //       onDelete: "cascade"
  //     });
  //   };
  return Employee;
};
