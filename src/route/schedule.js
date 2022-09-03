import { Router } from "express";
import scheduleController from "../controllers/scheduleController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { USER_ROLE } from "../constant";

export const router = Router();
router.use(authenticate);

router.post(
  "/bulk-create",
  allowUser([USER_ROLE.ADMIN, USER_ROLE.DOCTOR]),
  scheduleController.bulkCreateSchedule
);

router.get(
  "/:doctorId/:date",
  allowUser([USER_ROLE.ADMIN, USER_ROLE.DOCTOR]),
  scheduleController.getScheduleDoctorByDate
);
