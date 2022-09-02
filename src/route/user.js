import { Router } from "express";
import userController from "../controllers/userController";

export const router = Router();

router.get("/", userController.handleGetAllUsers);

router.get("/:id/", userController.handleGetUserById);

router.put("/update", userController.handleEditUser);

router.delete("/id", userController.handleDeleteUser);
