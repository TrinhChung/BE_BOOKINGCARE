import db from "../models/index";

let createNewClinicService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.name ||
        !data.avatar ||
        !data.address ||
        !data.descriptionHtml ||
        !data.descriptionMarkdown
      ) {
        resolve({ errCode: 1, errMessage: "Missing required data" });
      } else {
        await db.Clinic.create({
          name: data.name,
          image: data.avatar,
          address: data.address,
          descriptionHtml: data.descriptionHtml,
          descriptionMarkdown: data.descriptionMarkdown,
        });

        resolve({ errCode: 0, errMessage: "Ok" });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getClinicService = (field) => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = {};
      if (field === "all") {
        data = await db.Clinic.findAll();
      } else {
        data = await db.Clinic.findAll({
          attributes: {
            exclude: ["descriptionHtml", "descriptionMarkdown", "image"],
          },
        });
      }
      if (data && data.length > 0) {
        data = data.map((item) => {
          if (item && item.image) {
            item.image = new Buffer(item.image, "base64").toString("binary");
          }
          return item;
        });
      }
      resolve({ errCode: 0, errMessage: "Ok", data });
    } catch (error) {
      reject(error);
    }
  });
};

let getDetailClinicService = (id, province) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({ errCode: 1, errMessage: "Missing parameter" });
      } else {
        let data = {};

        data = await db.Clinic.findOne({
          where: { id: id },
          attributes: [
            "descriptionHtml",
            "descriptionMarkdown",
            "name",
            "address",
            "image",
          ],
          include: [
            {
              model: db.DoctorInfo,
              as: "clinicData",
              attributes: ["doctorId", "provinceId"],
              include: [
                { model: db.User, attributes: ["lastName", "firstName"] },
              ],
            },
          ],
          raw: false,
          nest: true,
        });
        if (data && data.image) {
          data.image = new Buffer(data.image, "base64").toString("binary");
        }
        if (!data) data = {};
        resolve({ errCode: 0, data: data });
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewClinicService: createNewClinicService,
  getClinicService: getClinicService,
  getDetailClinicService: getDetailClinicService,
};