"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    static associate(models) {
      Clinic.hasMany(models.DoctorInfo, {
        as: "clinicData",
      });
      Clinic.hasOne(models.Markdown, {
        foreignKey: "clinicId",
      });
      Clinic.hasMany(models.Favorite, {
        foreignKey: "fkId",
        targetKey: "id",
        as: "favoriteClinicData",
      });
    }
  }
  Clinic.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Clinic",
    }
  );
  return Clinic;
};
