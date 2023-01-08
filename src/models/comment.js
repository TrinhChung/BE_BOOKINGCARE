"use strict";
const { Model } = require("sequelize");
import { createUrl } from "../firebase/createUrl";
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User }) {
      Comment.belongsTo(User, {
        foreignKey: "userId",
        as: "user",
      });
    }
  }
  Comment.init(
    {
      keyMap: DataTypes.INTEGER,
      fkId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      content: DataTypes.STRING,
      parentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comment",
      hooks: {
        afterFind: async (instance, options) => {
          console.log(options);
          options.include = [];
          if (instance.length > 0) {
            instance = await Promise.all(
              instance.map(async (i, index) => {
                const user = await sequelize.models.User.findOne({
                  where: { id: i.userId },
                  attributes: ["image", "lastName", "firstName"],
                  raw: true,
                });
                if (user.image && user.image.length > 0) {
                  user.image = createUrl(user.image);
                }
                const children = await Comment.findAll({
                  where: { parentId: i.id },
                });
                i.comments = children;
                i.user = user;
                return i;
              })
            );
          }
        },
      },
    }
  );
  return Comment;
};
