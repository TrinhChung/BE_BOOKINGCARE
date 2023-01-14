import patientService from "../services/patientService";

let postBookAppointment = async (req, res) => {
  try {
    let info = await patientService.postBookAppointmentService(
      req.body,
      req.user
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

let postVerifyBookAppointment = async (req, res) => {
  try {
    let info = await patientService.postVerifyBookAppointmentService(
      req.query.token,
      req.query.doctorId
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

let postBookDoctorAccept = async (req, res) => {
  try {
    let info = await patientService.postBookDoctorAcceptService(req.body);
    return res.status(200).json(info);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

const getBookings = async (req, res) => {
  try {
    const user = req.user;
    const typeCheck = req.query.typeCheck ? req.query.typeCheck : 1;
    const bookings = await patientService.getBookingsService(
      user.id,
      typeCheck
    );
    return res.status(200).json(bookings);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

module.exports = {
  postBookAppointment: postBookAppointment,
  postVerifyBookAppointment: postVerifyBookAppointment,
  postBookDoctorAccept: postBookDoctorAccept,
  getBookings: getBookings,
};
