import db from "../models/index";

let createNewFavoriteService = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let favorite = await db.Favorite.findOne({
        where: { fkId: data.fkId, userId: data.userId, keyMap: data.keyMap },
      });
      if (favorite) {
        resolve({ errMessage: "Favorite already exists", error: 2 });
      }

      await db.Favorite.create({
        fkId: data.fkId,
        userId: data.userId,
        keyMap: data.keyMap,
      });

      resolve({ errMessage: "Ok", errCode: 0 });
    } catch (error) {
      reject(error);
    }
  });
};

let deleteFavoriteService = async (fkId, keyMap, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log(fkId + " " + keyMap + " " + userId);
      let favorite = await db.Favorite.findOne({
        where: {
          fkId: fkId,
          keyMap: keyMap,
          userId: userId,
        },
      });

      console.log(favorite);

      if (!favorite) {
        resolve({
          errCode: 2,
          errMessage: "The favorite exist",
        });
      }

      let res = await db.Favorite.destroy({
        where: { fkId: fkId, keyMap: keyMap, userId: userId },
      });

      resolve({ errMessage: "Ok", errCode: 0 });
    } catch (error) {
      reject(error);
    }
  });
};

let getFavoriteService = async (fkId, keyMap, userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let favorite = {};
      let favoriteCount = await db.Favorite.count({
        where: { fkId: fkId, keyMap: keyMap },
      });
      let userFavorite = await db.Favorite.findOne({
        where: { fkId: fkId, keyMap: keyMap, userId: userId },
      });
      favorite.count = favoriteCount;
      if (userFavorite) {
        favorite.isLike = 1;
      } else {
        favorite.isLike = 0;
      }
      if (!favorite) {
        favorite = {};
      }

      resolve({ data: favorite, errCode: 0 });
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

module.exports = {
  createNewFavoriteService: createNewFavoriteService,
  deleteFavoriteService: deleteFavoriteService,
  getFavoriteService: getFavoriteService,
};
