import { Router } from "express";
import scheduleController from "../controllers/scheduleController";
import { authenticate } from "../middleware/authenticate";

export const router = Router();
router.use(authenticate);

router.post("/bulk-create", scheduleController.bulkCreateSchedule);

router.get("/:doctorId/:date", scheduleController.getScheduleDoctorByDate);
