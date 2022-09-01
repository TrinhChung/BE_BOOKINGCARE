import { Router } from "express";
import wrap from "express-async-wrap";
import userController from "../controllers/userController";

export const router = Router();

router.post("/login", userController.handleLogin);

router.get("/", userController.handleGetAllUsers);

router.get("/:id/", userController.handleGetUserById);

router.post("/", userController.handleCreateNewUser);

router.put("/update", userController.handleEditUser);

router.delete("/id", userController.handleDeleteUser);
