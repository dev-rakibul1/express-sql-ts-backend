import express from "express";
import { playerRoutes } from "../modules/player/player.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/player",
    route: playerRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
