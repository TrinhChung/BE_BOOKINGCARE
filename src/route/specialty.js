import { Router } from "express";
import specialtyController from "../controllers/specialtyController";
import { authenticate } from "../middleware/authenticate";

export const router = Router();
router.use(authenticate);

router.post(`/`, specialtyController.createNewSpecialty);

router.get("/", specialtyController.getSpecialty);

router.get("/:id", specialtyController.getDetailSpecialty);
