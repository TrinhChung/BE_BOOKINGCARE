import { Router } from "express";
import handbookController from "../controllers/handbookController";

export const router = Router();

router.post(`/`, handbookController.createNewHandleBook);
router.get(`/`, handbookController.getHandBook);
router.get(`/:id`, handbookController.getDetailHandBook);
