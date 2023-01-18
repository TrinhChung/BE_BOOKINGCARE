import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import notificationController from "../controllers/notificationController";
export const router = Router();

router.get(
  "/",
  authenticate,
  notificationController.getAllNofiticationByUserId
);

router.post(
  "/read",
  authenticate,
  notificationController.bulkReaderNotifications
);
