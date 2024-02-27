"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const fileUploadHelper_1 = require("../../../helper/fileUploadHelper");
const player_controller_1 = require("./player.controller");
const router = express_1.default.Router();
router.post("/create-player", fileUploadHelper_1.imageSetup.upload.single("file"), player_controller_1.PlayerController.CreatePlayerController);
router.get("/", player_controller_1.PlayerController.GetAllPlayerController);
router.delete("/:id", player_controller_1.PlayerController.DeletePlayerController);
exports.playerRoutes = router;
