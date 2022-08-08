import db from "../models/index";
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

module.exports = {
  postBookAppointmentService: postBookAppointmentService,
  postVerifyBookAppointmentService: postVerifyBookAppointmentService,
};
