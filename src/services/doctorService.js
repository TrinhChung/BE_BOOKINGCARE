import db from "../models/index";
import { createUrl } from "../firebase/createUrl";
import _ from "lodash";
require("dotenv").config();
let getTopDoctorHome = (limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = await db.User.findAll({
        where: {
          roleId: "R2",
        },
        logging: true,
        include: [
          {
            model: db.AllCode,
            as: "positionData",
            attributes: ["valueEn", "valueVi", "valueJp"],
          },
          {
            model: db.AllCode,
            as: "genderData",
            attributes: ["valueEn", "valueVi", "valueJp"],
          },
          {
            model: db.Booking,
            as: "doctorPatientData",
            where: { statusId: "S3" },
            attributes: [],
            required: false,
            left: true,
          },
          // {
          //   model: db.Favorite,
          //   as: "favoriteData",
          //   where: { keyMap: 1 },
          //   attributes: [],
          //   // group: ["favoriteData.id"],
          //   required: false,

          //   left: true,
          // },
          {
            model: db.DoctorInfo,
            attributes: ["specialtyId"],
            include: [
              {
                model: db.Specialty,
                as: "specialtyData",
                attributes: ["name"],
              },
            ],
          },
        ],
        attributes: {
          exclude: ["password"],
          include: [
            [
              db.sequelize.fn(
                "COUNT",
                db.sequelize.col("doctorPatientData.statusId")
              ),
              "bookingCount",
            ],
            // [
            //   db.sequelize.fn(
            //     "COUNT",
            //     db.sequelize.literal("favoriteData.keyMap")
            //   ),
            //   "favoriteCount",
            // ],
          ],
        },
        limit: limit,
        group: ["User.id"],
        order: [
          [db.sequelize.literal("bookingCount"), "DESC"],
          // [db.sequelize.literal("favoriteCount"), "DESC"],
        ],
        raw: false,
        nest: true,
        plain: false,
        subQuery: false,
      });

      if (users && users.length > 0) {
        users = users.map((item) => {
          if (item && item.image) {
            item.image = createUrl(item.image);
          }
          return item;
        });
      }

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

let checkRequiredParameters = (data) => {
  let arr = [
    "doctorId",
    "contentHTML",
    "contentMarkdown",
    "action",
    "selectedPrice",
    "selectedPayment",
    "selectedProvince",
    "nameClinic",
    "addressClinic",
    "selectedSpecialty",
  ];
  for (let i = 0; i < arr.length; i++) {
    if (!data[arr[i]]) {
      return { check: false, field: arr[i] };
    }
  }

  return { check: true, field: "" };
};

let saveDetailInfoDoctor = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let checkField = checkRequiredParameters(data);
      if (!data || !checkField.check) {
        resolve({
          errCode: 1,
          errMessage: `Missing parameter: ${checkField.field}`,
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
          res.specialtyId = data.selectedSpecialty;
          res.clinicId = data.clinicId;
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
            specialtyId: data.selectedSpecialty,
            clinicId: data.clinicId,
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
              attributes: ["valueEn", "valueVi", "valueJp"],
            },
            {
              model: db.AllCode,
              as: "genderData",
              attributes: ["valueEn", "valueVi", "valueJp"],
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
                  attributes: ["valueEn", "valueVi", "valueJp"],
                },
                {
                  model: db.AllCode,
                  as: "paymentData",
                  attributes: ["valueEn", "valueVi", "valueJp"],
                },
                {
                  model: db.AllCode,
                  as: "provinceData",
                  attributes: ["valueEn", "valueVi", "valueJp"],
                },
                {
                  model: db.Specialty,
                  as: "specialtyData",
                  attributes: ["id", "name"],
                },
                {
                  model: db.Clinic,
                  as: "clinicData",
                  attributes: ["id", "name"],
                },
              ],
            },
          ],
          raw: false,
          nest: true,
        });

        if (data && data.image) {
          data.image = createUrl(data.image);
        }
        if (!data) data = {};
        resolve({ errCode: 0, data: data });
      }
    } catch (error) {
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
              attributes: ["valueEn", "valueVi", "valueJp"],
            },
            {
              model: db.AllCode,
              as: "paymentData",
              attributes: ["valueEn", "valueVi", "valueJp"],
            },
            {
              model: db.AllCode,
              as: "provinceData",
              attributes: ["valueEn", "valueVi", "valueJp"],
            },
          ],
          raw: true,
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
              attributes: ["valueEn", "valueVi", "valueJp"],
            },
            {
              model: db.AllCode,
              as: "genderData",
              attributes: ["valueEn", "valueVi", "valueJp"],
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
                  attributes: ["valueEn", "valueVi", "valueJp"],
                },
                {
                  model: db.AllCode,
                  as: "paymentData",
                  attributes: ["valueEn", "valueVi", "valueJp"],
                },
                {
                  model: db.AllCode,
                  as: "provinceData",
                  attributes: ["valueEn", "valueVi", "valueJp"],
                },
              ],
            },
          ],
          raw: false,
          nest: true,
        });

        if (data && data.image) {
          data.image = createUrl(data.image);
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

let getListPatientForDoctorService = (id, date, page) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id || !date || !page) {
        resolve({ errCode: 1, errMessage: "Missing parameters" });
      } else {
        let limit = 10;
        let offset = 0 + (page - 1) * limit;
        let count = await db.Booking.count({
          where: { doctorId: id, statusId: "S2", date: date },
        });
        count = count % 10 === 0 ? count / 10 : parseInt(count / limit) + 1;
        let data = await db.Booking.findAll({
          where: { doctorId: id, statusId: "S2", date: date },
          include: [
            {
              model: db.User,
              attributes: ["email", "firstName", "gender", "address"],
              as: "patientData",
              include: [
                {
                  model: db.AllCode,
                  attributes: ["valueVi", "valueEn"],
                  as: "genderData",
                },
              ],
            },
            {
              model: db.AllCode,
              attributes: ["valueVi", "valueEn"],
              as: "timeTypeDataBooking",
            },
          ],
          order: [["id", "DESC"]],
          offset: offset,
          limit: limit,
          raw: false,
          nest: true,
        });

        resolve({ errCode: 0, data: { countPage: count, patientData: data } });
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
  getExtraInfoDoctorByIdService: getExtraInfoDoctorByIdService,
  getProfileDoctorByIdService: getProfileDoctorByIdService,
  getListPatientForDoctorService: getListPatientForDoctorService,
};
