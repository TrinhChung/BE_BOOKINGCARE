import { Router } from "express";
import { router as specialty } from "./specialty";
import { router as doctor } from "./doctor";
import { router as patient } from "./patient";
import { router as user } from "./user";
import { router as clinic } from "./clinic";
import { router as allCode } from "./allCode";
import { router as schedule } from "./schedule";
import { router as handbook } from "./handbook";
import { router as auth } from "./auth";

export const router = Router();

router.use("/specialty", specialty);
router.use("/doctor", doctor);
router.use("/patient", patient);
router.use("/user", user);
router.use("/clinic", clinic);
router.use("/all-code", allCode);
router.use("/schedule", schedule);
router.use("/handbook", handbook);
router.use("/auth", auth);
