import { Router } from "express";
import doctorController from "../controllers/doctorController";

export const router = Router();

router.get("/top-doctor-home", doctorController.getTopDoctorHome);

router.get("/", doctorController.getAllDoctors);

router.post("/", doctorController.postInfoDoctor);

router.get("/detail/:id", doctorController.getDetailDoctorById);

router.get("/extra/:id", doctorController.getExtraInfoDoctorById);

router.get("/:id", doctorController.getProfileDoctorById);

router.get("/get-patients/:id", doctorController.getListPatientForDoctor);
