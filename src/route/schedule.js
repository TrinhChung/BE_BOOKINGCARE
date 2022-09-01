import { Router } from "express";
import scheduleController from "../controllers/scheduleController";

export const router = Router();

router.post("/bulk-create", scheduleController.bulkCreateSchedule);

router.get("/:doctorId/:date", scheduleController.getScheduleDoctorByDate);
