import { Router } from "express";
import handbookController from "../controllers/handbookController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { USER_ROLE } from "../constant";

export const router = Router();
router.use(authenticate);

router.post(
  `/`,
  allowUser([USER_ROLE.ADMIN, USER_ROLE.DOCTOR]),
  handbookController.createNewHandleBook
);
router.get(`/`, handbookController.getHandBook);
router.get(`/:id`, handbookController.getDetailHandBook);
