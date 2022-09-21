import historyService from "../services/historyService";

let getHistoryBookings = async (req, res, next) => {
  try {
    let info = await historyService.getHistoryBookingService(
      req.user.id,
      req.query.page,
      req.query.limit
    );
    return res.status(200).json(info);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

module.exports = {
  getHistoryBookings: getHistoryBookings,
};
