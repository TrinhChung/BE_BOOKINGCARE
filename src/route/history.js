import { Router } from "express";
import historyController from "../controllers/historyController";
import { authenticate } from "../middleware/authenticate";

export const router = Router();

router.get("/", authenticate, historyController.getHistoryBookings);
