// databaseConnect.ts
import { Server } from "http";
import { Sequelize } from "sequelize";
import config from "../config/config";
import app from "../index";

const sequelize = new Sequelize(config.database_url as string, {
  dialectOptions: {
    // ssl: {
    //   require: false,
    //   rejectUnauthorized: false, // You may need to set this option depending on your PostgreSQL server configuration
    // },
  },
});

let server: Server;

const databaseConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database is connected!");
    server = app.listen(config.port, () => {
      console.log(`Our server listen port is: ${config.port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

process.on("unhandledRejection", (error) => {
  if (server) {
    server.close(() => {
      console.log(error);
      process.exit(1);
    });
  } else {
    process.exit(2);
  }
});

process.on("SIGTERM", () => {
  console.log("SIGTERM is received!");
  if (server) {
    server.close();
  }
});

export default databaseConnect;
