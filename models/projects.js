module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
      projectName: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE
    });
  
    //   Project.associate = function(models) {
    //     Project.hasMany(models.Post, {
    //       onDelete: "cascade"
    //     });
    //   };
    return Project;
  };