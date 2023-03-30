import { Router } from "express";
import { createSessionController } from "../controllers/sessions.controllers";
import validateSchemaMiddleware from "../middlewares/global/validateSchema.middleware";
import { userExistsMiddleware } from "../middlewares/users/userExists.middleware";
import { createSessionSchema } from "../schemas/session.schemas";

const sessionsRoutes = Router();

sessionsRoutes.post(
  "",
  validateSchemaMiddleware(createSessionSchema),
  userExistsMiddleware,
  createSessionController
);

export { sessionsRoutes };
