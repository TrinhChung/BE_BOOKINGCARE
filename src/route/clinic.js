import { Router } from "express";
import clinicController from "../controllers/clinicController";
import { authenticate, allowUser } from "../middleware/authenticate";

export const router = Router();
router.use(authenticate);

router.post(`/`, clinicController.createNewClinic);

router.get("/", clinicController.getClinic);

router.get("/:id", clinicController.getDetailClinic);
