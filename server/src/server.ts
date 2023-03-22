import { app } from "./app";
import { PrismaClient } from "@prisma/client";

const PORT = process.env.PORT || 3000;

const prismaClient = new PrismaClient();

prismaClient
  .$connect()
  .then(async () => {
    console.log("Database connected!");

    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}/`);
    });
  })
  .catch((err) => console.error(err));
