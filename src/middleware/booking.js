import jwt from "jsonwebtoken";
require("dotenv").config();
import db from "../models/index";

export const checkUserBooking = () => {
  return (req, res, next) => {
    try {
      const user = req.user;
      console.log(req.body.doctorId + ": " + user.id);
      if (user.id === req.body.doctorId) {
        console.log(1);
        res
          .status(200)
          .json({ errCode: 1, errMessage: "Can't book by yourself" });
        return;
      } else {
        return next();
      }
    } catch (e) {
      console.log(e);
      res
        .status(200)
        .json({ errCode: -1, errMessage: "Error service booking" });
    }
  };
};
