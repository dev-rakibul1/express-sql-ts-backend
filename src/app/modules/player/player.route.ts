import express from "express";
import { PlayerController } from "./player.controller";

const router = express.Router();

router.post("/create-player", PlayerController.CreatePlayerController);
router.get("/", PlayerController.GetAllPlayerController);

export const playerRoutes = router;
