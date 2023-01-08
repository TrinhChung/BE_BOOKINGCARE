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

let getAllCommentsService = (keyMap, fkId, limit, order) => {
  return new Promise(async (resolve, reject) => {
    try {
      let count = await db.Comment.count({
        where: { keyMap: keyMap, fkId: fkId, parentId: 0 },
      });
      let maxCount = await db.Comment.count({
        where: { keyMap: keyMap, fkId: fkId },
      });
      let comments = await db.Comment.findAll({
        where: { keyMap: keyMap, fkId: fkId, parentId: 0 },
        raw: true,
        order: [["createdAt", order]],
        nested: true,
        limit: limit,
      });

      resolve({
        errMessage: "Ok",
        errCode: 0,
        data: {
          total: { count: count, maxCount: maxCount },
          comments: comments,
        },
      });
    } catch (error) {
      reject(error);
    }
  });
};

// let recursiveComment = async (comment) => {
//   let childrenComments = await db.Comment.findAll({
//     where: {
//       parentId: comment.id,
//     },
//     attributes: {
//       exclude: ["fkId", "keyMap"],
//     },
//   });
//   console.log("Tham số đầu vào:");
//   console.log(comment);
//   console.log("Comment con:");
//   console.log(childrenComments);
//   if (childrenComments.length === 0) return {};
//   childrenComments = childrenComments.map(async (childrenComment) => {
//     childrenComment.comments = await recursiveComment(childrenComment);
//     return comment;
//   });
//   console.log("kết quả trả về:");
//   console.log(childrenComments);
//   return await Promise.all(childrenComments);
// };

module.exports = {
  createNewCommentService: createNewCommentService,
  deleteCommentService: deleteCommentService,
  editCommentService: editCommentService,
  getAllCommentsService: getAllCommentsService,
};
