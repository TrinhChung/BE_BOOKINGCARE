import { Router } from "express";
import commentController from "../controllers/commentController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { checkReqUserId } from "../middleware/user";
export const router = Router();
router.use(authenticate);

router.post(`/`, commentController.createNewComment);

router.put("/:id", commentController.editComment);

router.get("/", commentController.getAllComments);

router.delete(`/:id`, commentController.deleteComment);
