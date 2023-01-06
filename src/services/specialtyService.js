import db from "../models/index";
import { createUrl } from "../firebase/createUrl";

let createNewSpecialtyService = (data, fileName) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.name || !data.descriptionHtml || !data.descriptionMarkdown) {
        resolve({ errCode: 1, errMessage: "Missing required data" });
      } else {
        await db.Specialty.create({
          name: data.name,
          image: fileName,
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

let getSpecialtyService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let data = await db.Specialty.findAll();
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
      console.log(error);
      reject(error);
    }
  });
};

let getDetailSpecialtyService = (id, province) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id || !province) {
        resolve({ errCode: 1, errMessage: "Missing parameter" });
      } else {
        let data = {};
        if (province === "all") {
          data = await db.Specialty.findOne({
            where: { id: id },
            include: [
              {
                model: db.DoctorInfo,
                as: "specialtyData",
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
        } else {
          data = await db.Specialty.findOne({
            where: { id: id },
            include: [
              {
                model: db.DoctorInfo,
                as: "specialtyData",
                required: false,
                where: { provinceId: province },
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
  createNewSpecialtyService: createNewSpecialtyService,
  getSpecialtyService: getSpecialtyService,
  getDetailSpecialtyService: getDetailSpecialtyService,
};
