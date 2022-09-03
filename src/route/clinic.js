import { Router } from "express";
import clinicController from "../controllers/clinicController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { USER_ROLE } from "../constant";

export const router = Router();
router.use(authenticate);

router.post(
  `/`,
  allowUser([USER_ROLE.ADMIN]),
  clinicController.createNewClinic
);

router.get("/", clinicController.getClinic);

router.get("/:id", clinicController.getDetailClinic);
