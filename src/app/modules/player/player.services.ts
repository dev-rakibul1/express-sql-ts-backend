import { Player, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CreatePlayerServices = async (payload: Player): Promise<Player> => {
  const player = payload.email;
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

const GetAllPlayerServices = async (): Promise<Player[] | null> => {
  const result = await prisma.player.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return result;
};

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
