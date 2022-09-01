import scheduleService from "../services/scheduleService";

let bulkCreateSchedule = async (req, res) => {
  try {
    let info = await scheduleService.bulkCreateScheduleService(req.body);
    return res.status(200).json(info);
  } catch (error) {
    console.log("Bulk create schedule service error: ", error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from the server",
    });
  }
};

let getScheduleDoctorByDate = async (req, res) => {
  try {
    let info = await scheduleService.getScheduleByDateService(
      req.params.doctorId,
      req.params.date
    );
    return res.status(200).json(info);
  } catch (error) {
    console.log("getScheduleDoctorByDate error: ", error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from the server",
    });
  }
};

module.exports = {
  bulkCreateSchedule: bulkCreateSchedule,
  getScheduleDoctorByDate: getScheduleDoctorByDate,
};
