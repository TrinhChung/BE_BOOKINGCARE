import { Router } from "express";
import { authenticate, allowUser } from "../middleware/authenticate";

export const router = Router();

router.get("/", (req, res) => {});
