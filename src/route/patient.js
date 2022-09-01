import { Router } from "express";
import patientController from "../controllers/patientController";

export const router = Router();

router.post("/appointment", patientController.postBookAppointment);

router.get(
  `/verify-book-appointment`,
  patientController.postVerifyBookAppointment
);

router.post("/booking-doctor-accept", patientController.postBookDoctorAccept);
