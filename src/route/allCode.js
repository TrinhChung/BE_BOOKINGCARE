import { Router } from "express";
import userController from "../controllers/userController";
import { authenticate, allowUser } from "../middleware/authenticate";

export const router = Router();
router.use(authenticate);

router.get("/", userController.getAllCode);
