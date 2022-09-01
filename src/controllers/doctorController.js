import doctorService from "../services/doctorService";
let getTopDoctorHome = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let response = await doctorService.getTopDoctorHome(+limit);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(200).json({
      errCode: -1,
      message: "Error from server...",
    });
  }
};

let getAllDoctors = async (req, res) => {
  try {
    let doctors = await doctorService.getAllDoctors();
    return res.status(200).json(doctors);
  } catch (e) {
    console.log("getAll doctor err: ", e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let postInfoDoctor = async (req, res) => {
  try {
    let response = await doctorService.saveDetailInfoDoctor(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let getDetailDoctorById = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(200).json({
        errCode: 1,
        errMessage: "Missing req parameter",
      });
    }
    let info = await doctorService.getDetailDoctorById(req.params.id);
    return res.status(200).json(info);
  } catch (error) {
    console.log("get detail doctor by id: ", error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the server",
    });
  }
};

let getExtraInfoDoctorById = async (req, res) => {
  try {
    let info = await doctorService.getExtraInfoDoctorByIdService(req.params.id);
    return res.status(200).json(info);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from the server",
    });
  }
};

let getProfileDoctorById = async (req, res) => {
  try {
    let info = await doctorService.getProfileDoctorByIdService(req.params.id);
    return res.status(200).json(info);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from the server",
    });
  }
};

let getListPatientForDoctor = async (req, res) => {
  try {
    if (!req.query || !req.params.id || !req.query.date || !req.query.page) {
      return res.status(200).json({
        errCode: 1,
        errMessage: "Messing params",
      });
    }
    let info = await doctorService.getListPatientForDoctorService(
      req.params.id,
      req.query.date,
      req.query.page
    );
    return res.status(200).json(info);
  } catch (error) {
    console.log("ERR: ", error);
    return res.status(200).json({
      errCode: -1,
      message: "Error from the server",
    });
  }
};

module.exports = {
  getTopDoctorHome: getTopDoctorHome,
  getAllDoctors: getAllDoctors,
  postInfoDoctor: postInfoDoctor,
  getDetailDoctorById: getDetailDoctorById,
  getExtraInfoDoctorById: getExtraInfoDoctorById,
  getProfileDoctorById: getProfileDoctorById,
  getListPatientForDoctor: getListPatientForDoctor,
};
