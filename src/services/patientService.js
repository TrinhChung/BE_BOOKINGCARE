import db from "../models/index";
import moment from "moment";
import bcrypt from "bcryptjs";
import { createNotification } from "./notification";
import localization from "moment/locale/vi";
const salt = bcrypt.genSaltSync(10);

import emailService from "./emailService";
import { v4 as uuidv4 } from "uuid";

let buildUrlEmail = (token, doctorId) => {
  let result = `${process.env.URL_REACT}/api/patient/verify-book-appointment/${token}&${doctorId}`;
  return result;
};

let postBookAppointmentService = (data, user) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.doctorId ||
        !data.timeType ||
        !data.date ||
        !data.nameDoctor ||
        !data.time ||
        !data.language ||
        (data.typeCheck !== 0 && data.typeCheck !== 1) ||
        !user
      ) {
        resolve({ errCode: 1, errMessage: "Missing parameter" });
      } else {
        let id = uuidv4();

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
            reason: data.reason,
            typeCheck: data.typeCheck,
            token: id,
          },
          raw: false,
        });

        if (!isCreate) {
          resolve({ errCode: 1, errMessage: "Appointment already exists" });
        }

        await emailService.sendSimpleEmail({
          email: user.email,
          patientName: user.lastName + " " + user.firstName,
          time: data.time,
          doctorName: data.nameDoctor,
          link: buildUrlEmail(id, data.doctorId),
          language: data.language,
        });
        createNotification({
          content: "Vui lòng xác thực lịch khám của bạn bằng email!",
          userId: user.id,
          type: "email-confirm",
        });
        resolve({ errCode: 0, errMessage: "Booking Success!" });
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
          let schedule = await db.Schedule.findOne({
            where: {
              date: appointment.date,
              timeType: appointment.timeType,
              doctorId: appointment.doctorId,
            },
            raw: false,
          });
          appointment.statusId = "S2";
          if (schedule) schedule.currentNumber = schedule.currentNumber + 1;
          if (schedule.currentNumber > 10) {
            resolve({
              error: 2,
              errMessage: "The maximum number of appointments has been reached",
            });
          }
          await appointment.save();
          await schedule.save();
          createNotification({
            userId: appointment.doctorId,
            type: "booking",
            typeId: appointment.id,
            content:
              "Có người dùng vừa đặt lịch khám của bạn vui lòng kiểm tra lại danh sách lịch hẹn<3",
          });
          resolve({
            errCode: 0,
            errMessage: "Update appointment Success",
          });
        } else {
          resolve({
            error: 2,
            errMessage: "Appointment has been activated or does not exist",
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
        await db.History.create({
          bookingId: patient.id,
          patientId: patient.patientId,
          files: data.file,
        });
        await emailService.sendBillEmail({
          email: patient.patientData.email,
          patientName: patient.patientData.firstName,
          time: date,
          doctorName: nameDoctor,
          language: data.language,
          file: data.file,
        });

        resolve({ errCode: 0, errMessage: "Save user success" });
        // resolve({ data: patient, date: date, nameDoctor: nameDoctor });
      }
    } catch (error) {
      reject(error);
    }
  });
};

const getBookingsService = (patientId, typeCheck) => {
  return new Promise(async (resolve, reject) => {
    try {
      let bookings = await db.Booking.findAll({
        where: {
          patientId: patientId,
          statusId: "S2",
          typeCheck: typeCheck,
        },
        include: [
          {
            model: db.AllCode,
            attributes: ["valueVi", "valueEn"],
            as: "timeTypeDataBooking",
          },
        ],
        raw: false,
        nest: true,
      });
      if (bookings.length > 0) {
        bookings = bookings.map((booking) => {
          booking.date = LetterCapitalize(
            moment(new Date(+booking.date)).format("dddd-DD/MM/YYYY")
          );
          return booking;
        });
      }
      resolve({ errCode: 0, data: bookings });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  postBookAppointmentService: postBookAppointmentService,
  postVerifyBookAppointmentService: postVerifyBookAppointmentService,
  postBookDoctorAcceptService: postBookDoctorAcceptService,
  getBookingsService: getBookingsService,
};
