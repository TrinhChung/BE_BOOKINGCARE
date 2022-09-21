import { Router } from "express";
import favoriteController from "../controllers/favoriteController";
import { authenticate, allowUser } from "../middleware/authenticate";
import { USER_ROLE } from "../constant";

export const router = Router();
router.use(authenticate);

router.post(`/`, favoriteController.createNewFavorite);

router.get("/", favoriteController.getFavorite);

router.delete("/", favoriteController.deleteFavorite);
