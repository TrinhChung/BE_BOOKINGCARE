import { Router } from "express";
import specialtyController from "../controllers/specialtyController";

export const router = Router();

router.post(`/`, specialtyController.createNewSpecialty);

router.get("/", specialtyController.getSpecialty);

router.get("/:id", specialtyController.getDetailSpecialty);
