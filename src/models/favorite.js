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
