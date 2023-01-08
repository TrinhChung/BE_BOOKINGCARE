"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.belongsTo(models.User, {
        foreignKey: "fkId",
        targetKey: "id",
        as: "favoriteData",
      });
      Favorite.belongsTo(models.Specialty, {
        foreignKey: "fkId",
        targetKey: "id",
        as: "favoriteSpecialData",
      });
      Favorite.belongsTo(models.Clinic, {
        foreignKey: "fkId",
        targetKey: "id",
        as: "favoriteClinicData",
      });
      Favorite.belongsTo(models.Handbook, {
        foreignKey: "fkId",
        targetKey: "id",
        as: "favoriteHandbookData",
      });
    }
  }
  Favorite.init(
    {
      keyMap: DataTypes.INTEGER,
      fkId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
