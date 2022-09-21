import favoriteService from "../services/favoriteService";

let createNewFavorite = async (req, res, next) => {
  try {
    if (!req || !req.body || !req.body.fkId || !req.body.keyMap) {
      return res.status(200).json({ error: 1, errMessage: "Missing body" });
    }
    req.body.fkId = +req.body.fkId;
    req.body.keyMap = +req.body.keyMap;
    let favorite = await favoriteService.createNewFavoriteService({
      ...req.body,
      userId: +req.user.id,
    });
    return res.status(200).json(favorite);
  } catch (error) {
    console.log("createNewFavorite " + error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let getFavorite = async (req, res, next) => {
  try {
    if (!req || !req.query || !req.query.keyMap || !req.query.fkId) {
      return res.status(200).json({ error: 1, errMessage: "Missing body" });
    }
    let favorite = await favoriteService.getFavoriteService(
      +req.query.fkId,
      +req.query.keyMap,
      +req.user.id
    );
    return res.status(200).json(favorite);
  } catch (error) {
    console.log("getFavorite " + error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

let deleteFavorite = async (req, res, next) => {
  try {
    if (!req || !req.query || !req.query.fkId || !req.query.keyMap) {
      return res
        .status(200)
        .json({ error: 1, errMessage: "Missing parameter" });
    }
    let favorite = await favoriteService.deleteFavoriteService(
      +req.query.fkId,
      +req.query.keyMap,
      +req.user.id
    );
    return res.status(200).json(favorite);
  } catch (error) {
    console.log("deleteFavorite " + error);

    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from the server",
    });
  }
};

module.exports = {
  createNewFavorite: createNewFavorite,
  deleteFavorite: deleteFavorite,
  getFavorite: getFavorite,
};
