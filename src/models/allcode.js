"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AllCode extends Model {
    static associate(models) {
      // define association here
      AllCode.hasMany(models.User, {
        foreignKey: "positionId",
        as: "positionData",
      });
      AllCode.hasMany(models.User, {
        foreignKey: "roleId",
        as: "roleData",
      });
      AllCode.hasMany(models.User, { foreignKey: "gender", as: "genderData" });
      AllCode.hasMany(models.Schedule, {
        foreignKey: "timeType",
        as: "timeTypeData",
      });
      AllCode.hasMany(models.DoctorInfo, {
        foreignKey: "priceId",
        as: "priceData",
      });
      AllCode.hasMany(models.DoctorInfo, {
        foreignKey: "paymentId",
        as: "paymentData",
      });
      AllCode.hasMany(models.DoctorInfo, {
        foreignKey: "provinceId",
        as: "ProvinceData",
      });

      AllCode.hasMany(models.Booking, {
        foreignKey: "timeType",
        as: "timeTypeDataBooking",
      });
    }
  }
  AllCode.init(
    {
      keyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
      valueJp: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AllCode",
    }
  );
  return AllCode;
};
