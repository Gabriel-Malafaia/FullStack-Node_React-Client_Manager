import { prismaClient } from "./database/prismaClient";
import express, { Request, Response } from "express";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import { errorHandler } from "./errors";
import contactsRoutes from "./routes/contacts.routes";
import usersRoutes from "./routes/users.routes";
import sessionsRoutes from "./routes/sessions.routes";

const app = express();
app.use(express.json());

app.use(cors());
app.use("/users", usersRoutes);
app.use("/sessions", sessionsRoutes);
app.use("/contacts", contactsRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
process.env.DEBUG = "prisma:*";

app.listen(PORT, () => console.log(`Server is  running on port ${PORT}`));
