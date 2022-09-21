import db from "../models/index";

let createNewCommentService = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Comment.create({
        ...data,
      });

      resolve({ errMessage: "Ok", errCode: 0 });
    } catch (error) {
      reject(error);
    }
  });
};

let deleteCommentService = async (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      let comment = await db.Comment.findOne({
        where: {
          id: id,
        },
      });

      if (!comment) {
        resolve({
          errCode: 2,
          errMessage: "The comment exist",
        });
      }

      await db.Comment.destroy({ where: { id: id } });

      resolve({ errMessage: "Ok", errCode: 0 });
    } catch (error) {
      reject(error);
    }
  });
};

let editCommentService = async (id, content) => {
  return new Promise(async (resolve, reject) => {
    try {
      let comment = await db.Comment.findOne({
        where: {
          id: id,
        },
        raw: false,
      });

      if (!comment) {
        resolve({
          errCode: 2,
          errMessage: "The comment exist",
        });
      }

      comment.content = content;
      await comment.save();

      resolve({ errMessage: "Ok", errCode: 0 });
    } catch (error) {
      reject(error);
    }
  });
};

let getAllCommentsService = async (fkId, keyMap) => {
  return new Promise(async (resolve, reject) => {
    try {
      resolve({ errMessage: "Ok", errCode: 0 });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewCommentService: createNewCommentService,
  deleteCommentService: deleteCommentService,
  editCommentService: editCommentService,
  getAllCommentsService: getAllCommentsService,
};
