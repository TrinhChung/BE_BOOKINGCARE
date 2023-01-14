import { Router } from "express";
import patientController from "../controllers/patientController";
import { authenticate } from "../middleware/authenticate";
import { checkUserBooking } from "../middleware/booking";

export const router = Router();

router.post(
  "/appointment",
  authenticate,
  checkUserBooking(),
  patientController.postBookAppointment
);

router.get(
  `/verify-book-appointment`,
  patientController.postVerifyBookAppointment
);

router.get(`/bookings`, authenticate, patientController.getBookings);

router.post(
  "/booking-doctor-accept",
  authenticate,
  patientController.postBookDoctorAccept
);
