import { Router } from "express";
import userController from "../controllers/userController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { USER_ROLE } from "../constant";
import multer from "multer";
import { uploadImage, deleteImage } from "../firebase/config";
const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 10 * 1024 * 1024,
});

export const router = Router();
router.use(authenticate);

router.get("/", allowUser([USER_ROLE.ADMIN]), userController.handleGetAllUsers);

router.get("/:id/", userController.handleGetUserById);

router.put(
  "/update",
  Multer.single("image"),
  uploadImage("avatarUser"),
  deleteImage(true),
  userController.handleEditUser
);

router.delete(
  "/:id",
  allowUser([USER_ROLE.ADMIN]),
  deleteImage(false),
  userController.handleDeleteUser
);
