import db from "../models/index";
import _ from "lodash";
import { createUrl } from "../firebase/createUrl";
require("dotenv").config();

let getHistoryBookingService = (userId, page, limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!userId || !page || !limit) {
        resolve({
          errCode: 1,
          errMessage: "Params in invalid",
        });
      } else {
        let offset = 0 + (page - 1) * limit;
        let count = await db.History.count();
        count = count % 10 === 0 ? count / 10 : parseInt(count / limit) + 1;
        let bookings = await db.History.findAll({
          where: { patientId: userId },
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
          include: [
            {
              model: db.Booking,
              as: "bookingData",
              attributes: ["date"],
              include: [
                {
                  model: db.User,
                  as: "doctorPatientData",
                  attributes: ["lastName", "firstName"],
                },
                {
                  model: db.AllCode,
                  as: "timeTypeDataBooking",
                  attributes: ["valueEn", "valueVi", "valueJp"],
                },
              ],
            },
          ],
          offset: offset,
          limit: +limit,
          order: [["createdAt", "desc"]],
          nest: true,
          raw: true,
        });
        if (bookings && bookings.length > 0) {
          bookings = bookings.map((item) => {
            if (item && item.files) {
              item.files = new Buffer(item.files, "base64").toString("binary");
            }
            return item;
          });
        }
        if (!bookings) bookings = {};
        resolve({ errCode: 0, countPage: count, data: bookings });
      }
    } catch (error) {
      console.error("get history booking error: " + error);
      reject(error);
    }
  });
};

module.exports = {
  getHistoryBookingService: getHistoryBookingService,
};
