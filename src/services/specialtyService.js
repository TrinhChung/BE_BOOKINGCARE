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

module.exports = {
  createNewSpecialtyService: createNewSpecialtyService,
};
