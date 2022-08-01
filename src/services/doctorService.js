import db from "../models/index";
import _ from "lodash";
require("dotenv").config();
const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;
let getTopDoctorHome = (limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        limit: limit,
        order: [["createdAt", "DESC"]],
        attributes: {
          exclude: ["password"],
        },
        where: {
          roleId: "R2",
        },
        include: [
          {
            model: db.AllCode,
            as: "positionData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.AllCode,
            as: "genderData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
        raw: true,
        nest: true,
      });

      resolve({
        errCode: 0,
        data: users,
      });
    } catch (error) {
      reject(error);
    }
  });
};

let getAllDoctors = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let doctors = await db.User.findAll({
        where: {
          roleId: "R2",
        },
        attributes: {
          exclude: ["password", "image"],
        },
      });

      resolve({
        errCode: 0,
        data: doctors,
      });
    } catch (error) {
      reject(error);
    }
  });
};

let saveDetailInfoDoctor = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data ||
        !data.contentHTML ||
        !data.contentMarkdown ||
        !data.action ||
        !data.selectedPrice ||
        !data.selectedPayment ||
        !data.selectedProvince ||
        !data.nameClinic ||
        !data.addressClinic
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        if (data.action === "CREATE") {
          await db.Markdown.create({
            contentHTML: data.contentHTML,
            contentMarkdown: data.contentMarkdown,
            description: data.description,
            doctorId: data.doctorId,
          });
        } else if (data.action === "EDIT") {
          let doctorMarkdown = await db.Markdown.findOne({
            where: { doctorId: data.doctorId },
            raw: false,
          });
          if (doctorMarkdown) {
            doctorMarkdown.contentHTML = data.contentHTML;
            doctorMarkdown.contentMarkdown = data.contentMarkdown;
            doctorMarkdown.description = data.description;
            doctorMarkdown.updatedAT = new Date();
            await doctorMarkdown.save();
          }
        }

        let res = await db.DoctorInfo.findOne({
          where: { doctorId: data.doctorId },
          raw: false,
        });

        if (res) {
          res.priceId = data.selectedPrice;
          res.provinceId = data.selectedProvince;
          res.paymentId = data.selectedPayment;
          res.nameClinic = data.nameClinic;
          res.addressClinic = data.addressClinic;
          res.note = data.note;
          await res.save();
        } else {
          await db.DoctorInfo.create({
            doctorId: data.doctorId,
            priceId: data.selectedPrice,
            provinceId: data.selectedProvince,
            paymentId: data.selectedPayment,
            nameClinic: data.nameClinic,
            addressClinic: data.addressClinic,
            note: data.note,
          });
        }

        resolve({
          errCode: 0,
          errMessage: "Create detail doctor successfully",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getDetailDoctorById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let data = await db.User.findOne({
          where: { id: id },
          attributes: {
            exclude: ["password"],
          },
          include: [
            {
              model: db.Markdown,
              attributes: ["description", "contentHTML", "contentMarkdown"],
            },
            {
              model: db.AllCode,
              as: "positionData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.AllCode,
              as: "genderData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.DoctorInfo,
              attributes: {
                exclude: ["id", "doctorId", "createdAt", "updatedAt"],
              },
              include: [
                {
                  model: db.AllCode,
                  as: "priceData",
                  attributes: ["valueEn", "valueVi"],
                },
                {
                  model: db.AllCode,
                  as: "paymentData",
                  attributes: ["valueEn", "valueVi"],
                },
                {
                  model: db.AllCode,
                  as: "provinceData",
                  attributes: ["valueEn", "valueVi"],
                },
              ],
            },
          ],
          raw: false,
          nest: true,
        });

        if (data && data.image) {
          data.image = new Buffer(data.image, "base64").toString("binary");
        }
        if (!data) data = {};
        resolve({ errCode: 0, data: data });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let bulkCreateScheduleService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let schedule = data;
        if (data.length > 0) {
          schedule = schedule.map((item) => {
            item.maxNumber = MAX_NUMBER_SCHEDULE;
            return item;
          });
        }

        let existing = await db.Schedule.findAll({
          where: { doctorId: data[0].doctorId, date: data[0].date },
          attributes: ["timeType", "date", "doctorId", "maxNumber"],
          raw: true,
        });

        // if (existing && existing.length > 0) {
        //   existing = existing.map((item) => {
        //     item.date = new Date(item.date).getTime();
        //     return item;
        //   });
        // }

        let toCreate = _.differenceWith(data, existing, (a, b) => {
          return a.timeType === b.timeType && a.date === b.date;
        });

        if (toCreate && toCreate.length > 0) {
          await db.Schedule.bulkCreate(toCreate);
        }
        resolve({ errCode: 0, errMessage: "Ok" });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getScheduleByDateService = async (doctorId, date) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!doctorId || !date) {
        console.log(doctorId + " " + date);
        resolve({
          errCode: 1,
          errMessage: "Missing required parameters!",
        });
      } else {
        let data = await db.Schedule.findAll({
          where: { doctorId: doctorId, date: date },
          include: [
            {
              model: db.AllCode,
              as: "timeTypeData",
              attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: true,
          nest: true,
        });
        if (!data) data = {};
        resolve({ errCode: 0, data: data });
      }
    } catch (error) {
      console.error("getScheduleByDateService error: " + error);
      reject(error);
    }
  });
};

let getExtraInfoDoctorByIdService = (doctorId) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!doctorId) {
        resolve({ errCode: 1, errMessage: "Missing parameters" });
      } else {
        let data = await db.DoctorInfo.findOne({
          where: { doctorId: doctorId },
          include: [
            {
              model: db.AllCode,
              as: "priceData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.AllCode,
              as: "paymentData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.AllCode,
              as: "provinceData",
              attributes: ["valueEn", "valueVi"],
            },
          ],
          raw: false,
          nest: true,
        });
        if (!data) data = {};

        resolve({
          errCode: 0,
          data: data,
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getProfileDoctorByIdService = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({ errCode: 1, errMessage: "Missing parameters" });
      } else {
        let data = await db.User.findOne({
          where: { id: id },
          attributes: {
            exclude: ["password"],
          },
          include: [
            {
              model: db.Markdown,
              attributes: ["description"],
            },
            {
              model: db.AllCode,
              as: "positionData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.AllCode,
              as: "genderData",
              attributes: ["valueEn", "valueVi"],
            },
            {
              model: db.DoctorInfo,
              attributes: {
                exclude: ["id", "doctorId", "createdAt", "updatedAt"],
              },
              include: [
                {
                  model: db.AllCode,
                  as: "priceData",
                  attributes: ["valueEn", "valueVi"],
                },
                {
                  model: db.AllCode,
                  as: "paymentData",
                  attributes: ["valueEn", "valueVi"],
                },
                {
                  model: db.AllCode,
                  as: "provinceData",
                  attributes: ["valueEn", "valueVi"],
                },
              ],
            },
          ],
          raw: false,
          nest: true,
        });

        if (data && data.image) {
          data.image = new Buffer(data.image, "base64").toString("binary");
        }
        if (!data) data = {};
        resolve({ errCode: 0, data: data });
      }
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  saveDetailInfoDoctor: saveDetailInfoDoctor,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateScheduleService: bulkCreateScheduleService,
  getScheduleByDateService: getScheduleByDateService,
  getExtraInfoDoctorByIdService: getExtraInfoDoctorByIdService,
  getProfileDoctorByIdService: getProfileDoctorByIdService,
};
