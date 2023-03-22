import validateSchemaMiddleware from "../middlewares/global/validateSchema.middleware";
import { Router } from "express";
import { createUserSchema } from "../schemas/user.schemas";
import { createUserController } from "../controllers/users.controllers";
import { userExistsMiddleware } from "../middlewares/users/userExists.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  validateSchemaMiddleware(createUserSchema),
  userExistsMiddleware,
  createUserController
);  

usersRoutes.get("");
usersRoutes.get("/:id");
usersRoutes.patch("/:id");
usersRoutes.delete("/:id");

export { usersRoutes };
