"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, {
        foreignKey: { allowNull: false, name: "patientId" },
        as: "patientData",
      });

      Booking.belongsTo(models.User, {
        foreignKey: "doctorId",
        as: "doctorPatientData",
        constraints: false,
      });

      Booking.belongsTo(models.AllCode, {
        foreignKey: "timeType",
        targetKey: "keyMap",
        as: "timeTypeDataBooking",
      });
    }
  }
  Booking.init(
    {
      statusId: DataTypes.STRING,
      doctorId: DataTypes.INTEGER,
      patientId: DataTypes.INTEGER,
      date: DataTypes.STRING,
      timeType: DataTypes.STRING,
      token: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
      paranoid: false,
    }
  );
  return Booking;
};
