import jwt from "jsonwebtoken";
require("dotenv").config();
import db from "../models/index";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = String(req.headers["authorization"] || "");
    if (authHeader.startsWith("Bearer ")) {
      const token = authHeader.substring(7, authHeader.length);
      let payloadToken = await jwt.verify(token, process.env.SECRECT_TOKEN);
      const user = await db.User.findOne({
        where: { id: payloadToken.id },
        attributes: {
          exclude: ["password", "image", "updatedAt", "createdAt"],
        },
        raw: true,
      });
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).json("failed to find user ");
      }
    } else {
      res.status(401).json("failed to find user ");
    }
  } catch (err) {
    console.error(err);
    res.status(401).json("User not allow");
  }
};

export const allowUser = (roles) => {
  return (req, res, next) => {
    const user = req.user;
    if (!user) {
      throw new Error("User is not found");
    }
    if (roles.length > 0 && !roles.includes(user.roleId)) {
      res.status(403).json("Not Allowed");
      return;
    }
    return next();
  };
};
