import { Router } from "express";
import clinicController from "../controllers/clinicController";
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
  allowUser([USER_ROLE.ADMIN]),
  Multer.single("image"),
  uploadImage("clinic"),
  clinicController.createNewClinic
);

router.get("/", clinicController.getClinic);

router.get("/:id", clinicController.getDetailClinic);
