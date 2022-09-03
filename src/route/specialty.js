import { Router } from "express";
import specialtyController from "../controllers/specialtyController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { USER_ROLE } from "../constant";

export const router = Router();
router.use(authenticate);

router.post(
  `/`,
  allowUser([USER_ROLE.ADMIN, USER_ROLE.DOCTOR]),
  specialtyController.createNewSpecialty
);

router.get("/", specialtyController.getSpecialty);

router.get("/:id", specialtyController.getDetailSpecialty);
