import express from "express";
import "express-async-errors";
import "reflect-metadata";
import { errorHandler } from "./errors";
import { contactsRoutes } from "./routes/contacts.routes";
import { sessionsRoutes } from "./routes/sessions.routes";
import { usersRoutes } from "./routes/users.routes";

const app = express();
app.use(express.json());

app.use(usersRoutes);
app.use(sessionsRoutes);
app.use(contactsRoutes);

app.use(errorHandler);

export { app };
