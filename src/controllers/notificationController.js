import {
  getAllNofiticationByUserIdService,
  bulkReaderNotificationService,
} from "../services/notification";
const getAllNofiticationByUserId = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(200).json({
        errCode: 1,
        errMessage: "token not found",
      });
    }
    const limit =
      req.query && req.query.limit ? Number(req.query.limit) : undefined;
    const notifications = await getAllNofiticationByUserIdService(
      req.user.id,
      limit
    );
    return res
      .status(200)
      .json({ errCode: 0, errMessage: "success", data: notifications });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ errCode: -1, errMessage: "server err" });
  }
};

const bulkReaderNotifications = async (req, res, next) => {
  try {
    if (
      !req.body ||
      !req.body.notifications ||
      req.body.notifications.length === 0
    ) {
      return res.status(200).json({
        errCode: 1,
        errMessage: "body is invalid",
      });
    }
    const data = await bulkReaderNotificationService(
      req.body.notifications,
      req.user
    );
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(200).json({ errCode: -1, errMessage: "server err" });
  }
};

module.exports = {
  getAllNofiticationByUserId: getAllNofiticationByUserId,
  bulkReaderNotifications: bulkReaderNotifications,
};
