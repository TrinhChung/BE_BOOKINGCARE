"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.AllCode, {
        foreignKey: "positionId",
        targetKey: "keyMap",
        as: "positionData",
      });
      User.belongsTo(models.AllCode, {
        foreignKey: "gender",
        targetKey: "keyMap",
        as: "genderData",
      });
      User.belongsTo(models.AllCode, {
        foreignKey: "roleId",
        targetKey: "keyMap",
        as: "roleData",
      });
      User.hasOne(models.Markdown, {
        foreignKey: "doctorId",
      });

      User.hasOne(models.Comment, {
        foreignKey: "userId",
        as: "user",
      });

      User.hasOne(models.DoctorInfo, {
        foreignKey: "doctorId",
      });

      User.hasOne(models.Booking, {
        foreignKey: "patientId",
        as: "patientData",
      });

      User.hasMany(models.Booking, {
        foreignKey: "doctorId",
        as: "doctorPatientData",
      });

      User.hasMany(models.Schedule, {
        foreignKey: "id",
        targetKey: "doctorId",
        as: "doctorData",
      });

      User.hasMany(models.Favorite, {
        foreignKey: "fkId",
        targetKey: "id",
        as: "favoriteData",
      });
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      gender: DataTypes.STRING,
      image: DataTypes.STRING,
      roleId: DataTypes.STRING,
      positionId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      paranoid: false,
    }
  );
  return User;
};
