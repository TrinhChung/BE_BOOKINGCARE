import db from "../models/index";
import _ from "lodash";
import { createUrl } from "../firebase/createUrl";
require("dotenv").config();

let createNewHandleBookService = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.name ||
        !data.doctorId ||
        !data.descriptionHtml ||
        !data.descriptionMarkdown ||
        !data.avatar
      ) {
        resolve({ errCode: 1, errMessage: "Missing parameters" });
      } else {
        await db.Handbook.create({
          name: data.name,
          doctorId: data.doctorId,
          descriptionHtml: data.descriptionHtml,
          descriptionMarkdown: data.descriptionMarkdown,
          image: data.avatar,
        });

        resolve({ errCode: 0, errMessage: "Ok" });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getHandBookService = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await db.Handbook.findAll({
        attributes: {
          exclude: ["descriptionHtml", "descriptionMarkdown"],
          include: [
            [
              db.sequelize.literal(
                "(SELECT COUNT(*) FROM Favorites WHERE Favorites.fkId = Handbook.id and Favorites.keyMap=4)"
              ),
              "countLike",
            ],
          ],
        },
        order: [[db.sequelize.literal("countLike"), "DESC"]],
      });
      if (res && res.length > 0) {
        res = res.map((item) => {
          if (item && item.image) {
            item.image = createUrl(item.image);
          }
          return item;
        });
      }
      resolve({ errCode: 0, data: res });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

let getDetailHandBookService = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let res = await db.Handbook.findOne({
        where: { id: id },
        attributes: {
          exclude: ["descriptionMarkdown", "image"],
        },
      });

      resolve({ errCode: 0, data: res });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};

module.exports = {
  createNewHandleBookService: createNewHandleBookService,
  getHandBookService: getHandBookService,
  getDetailHandBookService: getDetailHandBookService,
};
