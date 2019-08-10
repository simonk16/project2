module.exports = function(sequelize, DataTypes) {
    var Hour = sequelize.define("Hour", {
      hourName: DataTypes.STRING,
      updatedAt: DataTypes.DATE,
      createdAt: DataTypes.DATE
    });
  
    //   Hour.associate = function(models) {
    //     Hour.hasMany(models.Post, {
    //       onDelete: "cascade"
    //     });
    //   };
    return Hour;
  };