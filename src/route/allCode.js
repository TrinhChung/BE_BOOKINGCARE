import { Router } from "express";
import userController from "../controllers/userController";

export const router = Router();

router.get("/", userController.getAllCode);