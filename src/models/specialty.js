"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      Specialty.hasMany(models.DoctorInfo, {
        as: "specialtyData",
      });
      Specialty.hasOne(models.Markdown, {
        foreignKey: "specialtyId",
      });
      Specialty.hasMany(models.Favorite, {
        foreignKey: "fkId",
        targetKey: "id",
        as: "favoriteSpecialData",
      });
    }
  }
  Specialty.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialty",
    }
  );
  return Specialty;
};
