import { sendNotification } from "../controllers/socketController";
import db from "../models/index";
import moment from "moment";
import localization from "moment/locale/vi";

const createNotification = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const notification = await db.Notification.create(
        { ...data },
        { raw: true }
      );
      sendNotification(notification);
      resolve(notification);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

const getAllNofiticationByUserIdService = (userId, limit) => {
  return new Promise(async (resolve, reject) => {
    try {
      let notifications = await db.Notification.findAll({
        where: { userId: userId },
        order: [["createdAt", "DESC"]],
        limit: limit,
        raw: true,
        nest: true,
      });

      if (notifications && notifications.length > 0) {
        notifications = notifications.map((notification) => {
          notification.time = moment(
            new Date(+notification.createdAt)
          ).fromNow();
          return notification;
        });
      }
      resolve(notifications);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

module.exports = {
  createNotification: createNotification,
  getAllNofiticationByUserIdService: getAllNofiticationByUserIdService,
};
