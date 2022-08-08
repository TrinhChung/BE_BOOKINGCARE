import db from "../models/index";
import bcrypt from "bcryptjs";
import { raw } from "body-parser";

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      var hash = await bcrypt.hashSync(password, salt);
      resolve(hash);
    } catch (error) {
      reject(error);
    }
  });
};

let handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};

      let isExist = await checkUserEmail(email);
      if (isExist) {
        let user = await db.User.findOne({
          where: { email: email },
          attributes: [
            "id",
            "lastName",
            "firstName",
            "roleId",
            "email",
            "password",
          ],
          raw: true,
        });
        if (user) {
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            delete user.password;
            userData.errMessage = "OK";
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `User isn't exist in your system`;
        }
      } else {
        userData.errCode = 1;
        userData.errMessage = `Your's email isn't exist in your system`;
      }
      resolve(userData);
    } catch (error) {
      reject(error);
    }
  });
};

let checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({ where: { email: email } });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getAllUsers = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      let users = "";
      if (userId === "All") {
        users = await db.User.findAll({
          attributes: {
            exclude: ["password"],
          },
          raw: true,
        });
      } else if (userId && userId !== "All") {
        users = await db.User.findOne({
          where: { id: userId },
          attributes: {
            exclude: ["password"],
          },
          raw: true,
        });
      } else {
      }
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

let createNewUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let check = await checkUserEmail(data.email);
      if (check === true) {
        return resolve({
          error: 1,
          message: "your email address is already, please try again",
        });
      } else {
        let hashPassword = await hashUserPassword(data.password);
        await db.User.create({
          email: data.email,
          password: hashPassword,
          firstName: data.firstName,
          lastName: data.lastName,
          address: data.address,
          phoneNumber: data.phoneNumber,
          gender: data.gender,
          image: data.avatar,
          roleId: data.role,
          positionId: data.position,
        });
      }

      resolve({
        errCode: 0,
        message: "ok",
      });
    } catch (error) {
      reject(error);
    }
  });
};

let deleteUser = (id) => {
  return new Promise(async (resolve, reject) => {
    let user = await db.User.findOne({
      where: { id: id },
    });
    if (!user) {
      resolve({
        errCode: 2,
        errMessage: "The user exist",
      });
    }

    await db.User.destroy({ where: { id: id } });

    resolve({
      errCode: 0,
      errMessage: "Delete Ok",
    });
  });
};

let updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.id || !data.roleId || !data.gender || !data.positionId) {
        resolve({
          errCode: 2,
          errMessage: "Missing required parameter",
        });
      }
      let user = await db.User.findOne({ where: { id: data.id }, raw: false });
      if (user) {
        //   positionId: this.state.position,
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.address = data.address;
        user.roleId = data.roleId;
        user.lastName = data.lastName;
        user.address = data.address;
        user.phoneNumber = data.phoneNumber;
        user.gender = data.gender;
        user.positionId = data.positionId;
        if (data.avatar) {
          user.image = data.avatar;
        }
        await user.save({ where: { id: data.id } });

        resolve({
          errCode: 0,
          message: "Update successful",
        });
      } else {
        resolve({
          errCode: 0,
          errMessage: "user not found",
        });
      }
    } catch (error) {
      reject(error);
    }
  });
};

let getAllCodeService = (typeInput) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!typeInput) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter",
        });
      } else {
        let res = {};
        let allCode = await db.AllCode.findAll({
          where: { type: typeInput },
        });
        res.errCode = 0;
        res.data = allCode;
        resolve(res);
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  handleUserLogin: handleUserLogin,
  checkUserEmail: checkUserEmail,
  getAllUsers: getAllUsers,
  createNewUser: createNewUser,
  deleteUser: deleteUser,
  updateUserData: updateUserData,
  getAllCodeService: getAllCodeService,
};
