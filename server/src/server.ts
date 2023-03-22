import { app } from "./app";
import { prismaClient } from "./database/prismaClient";

const PORT = process.env.PORT || 3000;

prismaClient
  .$connect()
  .then(async () => {
    console.log("Database connected!");

    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}/`);
    });
  })
  .catch((err) => console.error(err));
