import db from "../models/index";
import { createUrl } from "../firebase/createUrl";

let createNewClinicService = (data, avatar) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.name ||
        avatar.length <= 0 ||
        !data.address ||
        !data.descriptionHtml ||
        !data.descriptionMarkdown
      ) {
        resolve({ errCode: 1, errMessage: "Missing required data" });
      } else {
        const clinic = await db.Clinic.create({
          name: data.name,
          image: avatar,
          address: data.address,
        });

        if (!clinic && !clinic.id) {
          resolve({ errCode: -1, errMessage: "Server Error" });
        }

        await db.Markdown.create({
          clinicId: clinic.id,
          contentHTML: data.descriptionHtml,
          contentMarkdown: data.descriptionMarkdown,
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
            item.image = createUrl(item.image);
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
          attributes: ["name", "address", "image"],
          include: [
            {
              model: db.DoctorInfo,
              as: "clinicData",
              attributes: ["doctorId", "provinceId"],
              include: [
                { model: db.User, attributes: ["lastName", "firstName"] },
              ],
            },
            {
              model: db.Markdown,
              attributes: ["contentHtml", "contentMarkdown"],
            },
          ],
          raw: false,
          nest: true,
        });
        if (data && data.image) {
          data.image = createUrl(data.image);
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
