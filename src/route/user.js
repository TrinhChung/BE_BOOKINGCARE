import { Router } from "express";
import userController from "../controllers/userController";
import { authenticate } from "../middleware/authenticate";

export const router = Router();
router.use(authenticate);

router.get("/", userController.handleGetAllUsers);

router.get("/:id/", userController.handleGetUserById);

router.put("/update", userController.handleEditUser);

router.delete("/id", userController.handleDeleteUser);
