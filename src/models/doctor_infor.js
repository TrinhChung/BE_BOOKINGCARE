"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DoctorInfo extends Model {
    static associate(models) {
      DoctorInfo.belongsTo(models.User, { foreignKey: "doctorId" });
      DoctorInfo.belongsTo(models.AllCode, {
        foreignKey: "priceId",
        targetKey: "keyMap",
        as: "priceData",
      });
      DoctorInfo.belongsTo(models.AllCode, {
        foreignKey: "paymentId",
        targetKey: "keyMap",
        as: "paymentData",
      });
      DoctorInfo.belongsTo(models.AllCode, {
        foreignKey: "provinceId",
        targetKey: "keyMap",
        as: "provinceData",
      });
    }
  }
  DoctorInfo.init(
    {
      doctorId: DataTypes.INTEGER,
      priceId: DataTypes.STRING,
      provinceId: DataTypes.STRING,
      paymentId: DataTypes.STRING,
      addressClinic: DataTypes.STRING,
      nameClinic: DataTypes.STRING,
      note: DataTypes.STRING,
      count: DataTypes.INTEGER,
    },
    {
      sequelize,
      freezeTableName: true,
      modelName: "DoctorInfo",
    }
  );
  return DoctorInfo;
};
