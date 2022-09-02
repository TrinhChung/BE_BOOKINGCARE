import { Router } from "express";
import doctorController from "../controllers/doctorController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { USER_ROLE } from "../constant";

export const router = Router();

router.get("/top-doctor-home", doctorController.getTopDoctorHome);

router.get("/", doctorController.getAllDoctors);

router.post("/", doctorController.postInfoDoctor);

router.get("/detail/:id", doctorController.getDetailDoctorById);

router.get("/extra/:id", doctorController.getExtraInfoDoctorById);

router.get("/:id", doctorController.getProfileDoctorById);

router.get(
  "/get-patients/:id",
  authenticate,
  allowUser([USER_ROLE.ADMIN, USER_ROLE.DOCTOR]),
  doctorController.getListPatientForDoctor
);
