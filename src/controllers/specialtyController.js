import specialtyService from "../services/specialtyService";

let createNewSpecialty = async (req, res, next) => {
  try {
    if (!req.fileName) {
      return res
        .status(200)
        .json({ error: 1, errMessage: "upload image fail" });
    }
    let info = await specialtyService.createNewSpecialtyService(
      req.body,
      req.fileName
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

let getSpecialty = async (req, res, next) => {
  try {
    let info = await specialtyService.getSpecialtyService();
    return res.status(200).json(info);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let getDetailSpecialty = async (req, res, next) => {
  try {
    let info = await specialtyService.getDetailSpecialtyService(
      req.params.id,
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
  createNewSpecialty: createNewSpecialty,
  getSpecialty: getSpecialty,
  getDetailSpecialty: getDetailSpecialty,
};
