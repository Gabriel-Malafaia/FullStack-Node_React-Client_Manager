import express from "express";
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

app.use(errorHandler);

export { app };
