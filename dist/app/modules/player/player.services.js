"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerServices = void 0;
const client_1 = require("@prisma/client");
const fileUploadHelper_1 = require("../../../helper/fileUploadHelper");
const prisma = new client_1.PrismaClient();
// Create player
const CreatePlayerServices = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const player = payload.email;
    const image = req.file;
    const uploadImage = yield fileUploadHelper_1.imageSetup.uploadToCloudinary(image);
    if (uploadImage) {
        req.body.file = uploadImage.secure_url;
    }
    console.log(payload);
    const isPlayerExist = yield prisma.player.findFirst({
        where: {
            email: player,
        },
    });
    if (isPlayerExist) {
        throw new Error("Player already exists!");
    }
    const result = yield prisma.player.create({ data: payload });
    return result;
});
// Get all player
const GetAllPlayerServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.player.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
    return result;
});
// Delete player
const DeletePlayerServices = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const player = yield prisma.player.findUnique({
        where: {
            id: id,
        },
    });
    if (!player) {
        throw new Error("Player not found");
    }
    const deletedPlayer = yield prisma.player.delete({
        where: {
            id: id,
        },
    });
    return deletedPlayer;
});
exports.PlayerServices = {
    CreatePlayerServices,
    GetAllPlayerServices,
    DeletePlayerServices,
};
