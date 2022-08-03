import clinicService from "../services/clinicService";
let createNewClinic = async (req, res, next) => {
  try {
    let info = await clinicService.createNewClinicService(req.body);
    return res.status(200).json(info);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let getClinic = async (req, res, next) => {
  try {
    let info = await clinicService.getClinicService(req.query.field);
    return res.status(200).json(info);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let getDetailClinic = async (req, res, next) => {
  try {
    let info = await clinicService.getDetailClinicService(
      req.query.id,
      req.query.province
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
  createNewClinic: createNewClinic,
  getClinic: getClinic,
  getDetailClinic: getDetailClinic,
};
