import { Router } from "express";
import clinicController from "../controllers/clinicController";

export const router = Router();

router.post(`/`, clinicController.createNewClinic);

router.get("/", clinicController.getClinic);

router.get("/:id", clinicController.getDetailClinic);
