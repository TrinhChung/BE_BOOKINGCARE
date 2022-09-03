import { Router } from "express";
import handbookController from "../controllers/handbookController";
import { authenticate } from "../middleware/authenticate";

export const router = Router();
router.use(authenticate);

router.post(`/`, handbookController.createNewHandleBook);
router.get(`/`, handbookController.getHandBook);
router.get(`/:id`, handbookController.getDetailHandBook);
