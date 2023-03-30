import { prismaClient } from "./database/prismaClient";
import express, { Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import { errorHandler } from "./errors";
import { contactsRoutes } from "./routes/contacts.routes";
import { sessionsRoutes } from "./routes/sessions.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use(cors());
app.use("/users", usersRoutes);
app.use("/sessions", sessionsRoutes);
app.use("/contacts", contactsRoutes);

app.get("/", async (request: Request, response: Response) => {
  const users = await prismaClient.user.findMany();

  return response.json(users);
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
process.env.DEBUG = "prisma:*";

prismaClient
  .$connect()
  .then(async () => {
    console.log("Database connected!");

    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}/`);
    });
  })
  .catch((err) => console.error(err));

export { app };
