import { Request, Response } from "express";
import httpStatus from "http-status";
import SendResponse from "../../../shared/SendResponse";
import TryCatch from "../../../shared/TryCatch";
import { PlayerServices } from "./player.services";

// create player api

const CreatePlayerController = TryCatch(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await PlayerServices.CreatePlayerServices(payload);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Player create success!",
    data: result,
  });
});

// Get player api
const GetAllPlayerController = TryCatch(async (req: Request, res: Response) => {
  const result = await PlayerServices.GetAllPlayerServices();

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Player get success!",
    data: result,
  });
});

// Get player api
const DeletePlayerController = TryCatch(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await PlayerServices.DeletePlayerServices(id);

  SendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Player get success!",
    data: result,
  });
});

export const PlayerController = {
  CreatePlayerController,
  GetAllPlayerController,
  DeletePlayerController,
};
