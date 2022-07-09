import db from "../models/index";
import CRUDService from "../services/CRUDService";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("homepage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

let getCRUD = async (req, res) => {
  try {
    let data = await db.User.findAll();

    return res.render("crudPage.ejs", { data: JSON.stringify(data) });
  } catch (error) {
    console.log(error);
  }
};

let postCRUD = async (req, res) => {
  let message = await CRUDService.createNewUser(req.body);
  console.log(message);
  return res.send("Successful");
};

let getUsers = async (req, res) => {
  let data = await CRUDService.getAllUsers();
  return res.render("listUsers.ejs", { data: data });
};

let getEditCRUD = async (req, res) => {
  let id = req.query.id;
  if (id) {
    let userData = await CRUDService.getUserInfoById(id);
    return res.render("editCRUD.ejs", { user: userData });
  } else {
    return res.send("User not found");
  }
};

let putCRUD = async (req, res) => {
  let data = req.body;
  let id = req.query.id;
  let allUsers = await CRUDService.updateUserData(data, id);
  return res.render("listUsers.ejs", { data: allUsers });
};

let deleteCRUD = async (req, res) => {
  let id = req.query.id;

  if (id) {
    await CRUDService.deleteUserById(id);
  } else {
    return res.send("User not found");
  }

  return res.send("delete successfully");
};

module.exports = {
  getHomePage: getHomePage,
  getCRUD: getCRUD,
  postCRUD: postCRUD,
  getUsers: getUsers,
  getEditCRUD: getEditCRUD,
  putCRUD: putCRUD,
  deleteCRUD: deleteCRUD,
};
