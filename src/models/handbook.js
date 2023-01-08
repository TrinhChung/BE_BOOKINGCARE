"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Handbook extends Model {
    static associate(models) {
      Handbook.hasMany(models.Favorite, {
        foreignKey: "fkId",
        targetKey: "id",
        as: "favoriteHandbookData",
      });
    }
  }
  Handbook.init(
    {
      name: DataTypes.STRING,
      doctorId: DataTypes.INTEGER,
      descriptionHtml: DataTypes.TEXT,
      descriptionMarkdown: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Handbook",
    }
  );
  return Handbook;
};
