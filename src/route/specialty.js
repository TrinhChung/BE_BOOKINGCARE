import { Router } from "express";
import specialtyController from "../controllers/specialtyController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { USER_ROLE } from "../constant";
import multer from "multer";
import { uploadImage } from "../firebase/config";

const Multer = multer({
  storage: multer.memoryStorage(),
  limits: 10 * 1024 * 1024,
});

export const router = Router();
router.use(authenticate);

router.post(
  `/`,
  allowUser([USER_ROLE.ADMIN, USER_ROLE.DOCTOR]),
  Multer.single("image"),
  uploadImage("specialty"),
  specialtyController.createNewSpecialty
);

router.get("/", specialtyController.getSpecialty);

router.get("/:id", specialtyController.getDetailSpecialty);
