import db from "../models/index";

let createNewSpecialtyService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.name ||
        !data.avatar ||
        !data.descriptionHtml ||
        !data.descriptionMarkdown
      ) {
        resolve({ errCode: 1, errMessage: "Missing required data" });
      } else {
        await db.Specialty.create({
          name: data.name,
          image: data.avatar,
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

module.exports = {
  createNewSpecialtyService: createNewSpecialtyService,
  getSpecialtyService: getSpecialtyService,
};
