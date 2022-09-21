import userService from "../services/userService";

let handleLogin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errCode: 1,
      errMessage: "Missing inputs parameters!",
    });
  }

  let userData = await userService.handleUserLogin(email, password);

  return res.status(200).json(userData);
};

let handleGetAllUsers = async (req, res) => {
  if (!req.query.page || req.query.page === "undefined") {
    return res.status(400).json({
      error: 1,
      errMessage: "missing params page",
    });
  }
  let page = req.query.page;
  let users = await userService.getAllUsers(page);
  return res.status(200).json(users);
};

let handleGetUserById = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    return res.status(404).json({
      errCode: 1,
      errMessage: "Missing id parameter",
      users: [],
    });
  }

  let user = await userService.getUserByIdService(id);

  return res.status(200).json({
    errCode: 0,
    errMessage: "OK",
    user: user,
  });
};

let handleGetUserByToken = async (req, res) => {
  let user = req.user;
  if (user) {
    let resData = await userService.getUserByIdService(user.id);
    if (resData) {
      return res.status(200).json({ errCode: 0, user: resData });
    } else {
      return res
        .status(404)
        .json({ errCode: 1, errMessage: "Not found user by token" });
    }
  } else {
    return res
      .status(404)
      .json({ errCode: 1, errMessage: "Not found user by token" });
  }
};

let handleCreateNewUser = async (req, res) => {
  let data = await userService.createNewUser(req.body);
  return res.status(200).json(data);
};

let handleEditUser = async (req, res) => {
  let data = req.body;
  let message = await userService.updateUserData(data);
  return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
  if (!req.params.id) {
    return res.status(200).json({
      errCode: 1,
      errMessage: "Missing required parameter",
    });
  }
  let message = await userService.deleteUser(req.params.id);
  return res.status(200).json(message);
};

let getAllCode = async (req, res) => {
  try {
    let data = await userService.getAllCodeService(req.query.type);
    return res.status(200).json(data);
  } catch (error) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Err from server",
    });
  }
};

module.exports = {
  handleLogin: handleLogin,
  handleGetAllUsers: handleGetAllUsers,
  handleCreateNewUser: handleCreateNewUser,
  handleEditUser: handleEditUser,
  handleDeleteUser: handleDeleteUser,
  getAllCode: getAllCode,
  handleGetUserById: handleGetUserById,
  handleGetUserByToken: handleGetUserByToken,
};
