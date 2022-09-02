import { Router } from "express";
import userController from "../controllers/userController";
import { authenticate } from "../middleware/authenticate";

export const router = Router();

router.post("/login", userController.handleLogin);

router.post("/", userController.handleCreateNewUser);
