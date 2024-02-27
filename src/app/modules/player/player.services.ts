import { Player, PrismaClient } from "@prisma/client";
import { Request } from "express";
// import { imageSetup } from "../../../helper/fileUploadHelper";
// import { IUploadFile } from "../../../types/common";

const prisma = new PrismaClient();

// Create player
const CreatePlayerServices = async (req: Request): Promise<Player> => {
  const payload = req.body;
  const player = payload.email;

  // const image = req.file as IUploadFile;
  // const uploadImage = await imageSetup.uploadToCloudinary(image);

  // if (uploadImage) {
  //   req.body.file = uploadImage.secure_url;
  // }

  console.log(payload);
  const isPlayerExist = await prisma.player.findFirst({
    where: {
      email: player,
    },
  });

  if (isPlayerExist) {
    throw new Error("Player already exists!");
  }

  const result = await prisma.player.create({ data: payload });
  return result;
};

// Get all player
const GetAllPlayerServices = async (): Promise<Player[] | null> => {
  const result = await prisma.player.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

// Delete player
const DeletePlayerServices = async (id: string): Promise<Player | null> => {
  const player = await prisma.player.findUnique({
    where: {
      id: id,
    },
  });

  if (!player) {
    throw new Error("Player not found");
  }

  const deletedPlayer = await prisma.player.delete({
    where: {
      id: id,
    },
  });

  return deletedPlayer;
};

export const PlayerServices = {
  CreatePlayerServices,
  GetAllPlayerServices,
  DeletePlayerServices,
};
