import db from "../models/index";
import { getUserInfoService } from "./userService";
import { sendNotification } from "../controllers/socketController";
let createNewCommentService = async (data, user) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Comment.create({
        ...data,
      });
      if (data.keyMap === 1 && Number(data.userId) !== Number(data.fkId)) {
        const notification = await db.Notification.create({
          content: `${user.firstName} ${user.lastName} đã bình luận blog của bạn`,
          type: "doctor",
          typeId: data.fkId,
          userId: data.fkId,
        });
        sendNotification(notification);
      }
      if (data.parentId > 0) {
        const parent = await getCommentById(data.parentId);
        const notification = await db.Notification.create({
          content: `${user.firstName} ${user.lastName} đã trả lời comment của bạn`,
          type: `comment ${data.keyMap}`,
          typeId: data.parentId,
          userId: parent.userId,
        });
        if (notification) {
          sendNotification(notification);
        }
      }
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

const getCommentById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const comment = await db.Comment.findOne({ where: { id: id } });
      resolve(comment);
    } catch (error) {
      console.log(error);
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
