import express from "express";
import { imageSetup } from "../../../helper/fileUploadHelper";
import { PlayerController } from "./player.controller";

const router = express.Router();

router.post(
  "/create-player",
  imageSetup.upload.single("file"),
  PlayerController.CreatePlayerController
);

router.get("/", PlayerController.GetAllPlayerController);
router.delete("/:id", PlayerController.DeletePlayerController);

export const playerRoutes = router;
