"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Notification extends Model {
    static associate(models) {}
  }
  Notification.init(
    {
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      type: DataTypes.STRING,
      typeId: DataTypes.INTEGER,
      read: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Notification",
    }
  );
  return Notification;
};
