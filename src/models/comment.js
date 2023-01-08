"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {}
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
          if (instance.length > 0) {
            instance = await Promise.all(
              instance.map(async (i, index) => {
                console.log(index);
                console.log(i);
                const children = await Comment.findAll({
                  where: { parentId: i.id },
                });
                console.log(index);
                console.log(children);
                i.comments = children;
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
