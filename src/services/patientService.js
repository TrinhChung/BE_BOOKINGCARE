import db from "../models/index";
import moment from "moment";
import localization from "moment/locale/vi";

import emailService from "./emailService";
import { v4 as uuidv4 } from "uuid";

let buildUrlEmail = (token, doctorId) => {
  let result = `${process.env.URL_REACT}/verify-book-appointment/${token}&${doctorId}`;
  return result;
};
let postBookAppointmentService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.email ||
        !data.doctorId ||
        !data.timeType ||
        !data.date ||
        !data.fullName ||
        !data.nameDoctor ||
        !data.time ||
        !data.gender ||
        !data.address ||
        !data.language
      ) {
        resolve({ errCode: 1, errMessage: "Missing parameter" });
      } else {
        let id = uuidv4();

        await emailService.sendSimpleEmail({
          email: data.email,
          patientName: data.fullName,
          time: data.time,
          doctorName: data.nameDoctor,
          link: buildUrlEmail(id, data.doctorId),
          language: data.language,
        });

        const [user] = await db.User.findOrCreate({
          where: { email: data.email },
          defaults: {
            email: data.email,
            roleId: "R3",
            gender: data.gender,
            address: data.address,
            firstName: data.fullName,
          },
        });

        if (user) {
          let [booking, isCreate] = await db.Booking.findOrCreate({
            where: {
              patientId: user.id,
              date: data.date,
              timeType: data.timeType,
              doctorId: data.doctorId,
            },
            defaults: {
              statusId: "S1",
              doctorId: data.doctorId,
              patientId: user.id,
              date: data.date,
              timeType: data.timeType,

              token: id,
            },
            raw: false,
          });
        }

        resolve({ errCode: 0, errMessage: "Save user success" });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let postVerifyBookAppointmentService = (token, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!token || !id) {
        resolve({
          errCode: 1,
          errMessage: "Missing parameter",
        });
      } else {
        let appointment = await db.Booking.findOne({
          where: { doctorId: id, token: token, statusId: "S1" },
          raw: false,
        });

        if (appointment) {
          appointment.statusId = "S2";
          await appointment.save();
          resolve({
            errCode: 0,
            errMessage: "Update appointment Success",
          });
        } else {
          resolve({
            error: 2,
            errCode: "Appointment has been activated or does not exist",
          });
        }
      }
    } catch (error) {
      reject(error);
    }
  });
};

let LetterCapitalize = (str) => {
  return str
    .split(" ")
    .map((item) => item.substring(0, 1).toUpperCase() + item.substring(1))
    .join(" ");
};

let postBookDoctorAcceptService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.file || !data.id || !data.language) {
        resolve({ errCode: 1, errMessage: "Missing parameter" });
      } else {
        let patient = await db.Booking.findOne({
          where: { id: data.id },
          include: [
            {
              model: db.User,
              attributes: ["email", "firstName"],
              as: "patientData",
            },
            {
              model: db.User,
              attributes: ["email", "firstName", "lastName"],
              as: "doctorPatientData",
            },
            {
              model: db.AllCode,
              attributes: ["valueVi", "valueEn"],
              as: "timeTypeDataBooking",
            },
          ],
          raw: false,
          nest: true,
        });

        let date =
          data.language === "vi"
            ? patient.timeTypeDataBooking.valueVi +
              " " +
              LetterCapitalize(
                moment(new Date(+patient.date)).format("dddd-DD/MM/YYYY")
              )
            : patient.timeTypeDataBooking.valueEn +
              " " +
              moment(new Date(+patient.date))
                .locale("en")
                .format("dddd-DD/MM/YYYY");

        patient.statusId = "S3";
        let nameDoctor =
          data.language === "vi"
            ? patient.doctorPatientData.firstName +
              " " +
              patient.doctorPatientData.lastName
            : patient.doctorPatientData.lastName +
              " " +
              patient.doctorPatientData.firstName;
        await patient.save();
        let res = await emailService.sendBillEmail({
          email: patient.patientData.email,
          patientName: patient.patientData.firstName,
          time: date,
          doctorName: nameDoctor,
          language: data.language,
          file: data.file,
        });
        console.log(res);

        resolve({ errCode: 0, errMessage: "Save user success" });
        // resolve({ data: patient, date: date, nameDoctor: nameDoctor });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  postBookAppointmentService: postBookAppointmentService,
  postVerifyBookAppointmentService: postVerifyBookAppointmentService,
  postBookDoctorAcceptService: postBookDoctorAcceptService,
};
