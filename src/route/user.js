import { Router } from "express";
import userController from "../controllers/userController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { USER_ROLE } from "../constant";

export const router = Router();
router.use(authenticate);

router.get("/", userController.handleGetAllUsers);

router.get("/:id/", userController.handleGetUserById);

router.put("/update", userController.handleEditUser);

router.delete(
  "/id",
  allowUser([USER_ROLE.ADMIN]),
  userController.handleDeleteUser
);
