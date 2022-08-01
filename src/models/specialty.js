"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Specialty extends Model {
    static associate(models) {
      Specialty.hasMany(models.DoctorInfo, {
        foreignKey: "id",
        targetKey: "specialtyId",
        as: "specialtyData",
      });
    }
  }
  Specialty.init(
    {
      name: DataTypes.STRING,
      descriptionHtml: DataTypes.TEXT,
      descriptionMarkdown: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Specialty",
    }
  );
  return Specialty;
};
