"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class History extends Model {
    static associate(models) {
      History.belongsTo(models.Booking, {
        foreignKey: "bookingId",
        as: "bookingData",
      });
    }
  }
  History.init(
    {
      bookingId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
      files: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "History",
    }
  );
  return History;
};
