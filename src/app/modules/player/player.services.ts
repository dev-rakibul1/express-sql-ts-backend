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
export const PlayerServices = {
  CreatePlayerServices,
  GetAllPlayerServices,
};
