import { Router } from "express";
import userController from "../controllers/userController";
import { authenticate } from "../middleware/authenticate";
import multer from "multer";
import { uploadImage } from "../firebase/config";
const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 10 * 1024 * 1024,
});
export const router = Router();

router.post("/login", userController.handleLogin);

router.post(
  "/",
  Multer.single("image"),
  uploadImage("avatarUser"),
  userController.handleCreateNewUser
);

router.get("/me", authenticate, userController.handleGetUserByToken);
