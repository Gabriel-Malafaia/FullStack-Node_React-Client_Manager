import validateSchemaMiddleware from "../middlewares/global/validateSchema.middleware";
import { Router } from "express";
import { createUserSchema, editUserSchema } from "../schemas/user.schemas";
import {
  createUserController,
  deleteUserController,
  listUniqueUserController,
  listUsersController,
  patchUserController,
} from "../controllers/users.controllers";
import { userExistsMiddleware } from "../middlewares/users/userExists.middleware";
import { userIsAdminMiddleware } from "../middlewares/users/userIsAdmin.middleware";
import { userIdExistsMiddleware } from "../middlewares/users/userIdExists.middleware";
import { userIsAuthenticatedMiddleware } from "../middlewares/users/userIsAuthenticated.middleware";
import { userIsOwnerMiddleware } from "../middlewares/users/userIsOwner.middleware";

const usersRoutes = Router();

usersRoutes.post(
  "",
  validateSchemaMiddleware(createUserSchema),
  userExistsMiddleware,
  createUserController
);

usersRoutes.get(
  "",
  userIsAuthenticatedMiddleware,
  userIsAdminMiddleware,
  listUsersController
);

usersRoutes.get(
  "/get",
  userIsAuthenticatedMiddleware,
  listUniqueUserController
);

usersRoutes.patch(
  "/:id",
  validateSchemaMiddleware(editUserSchema),
  userIsAuthenticatedMiddleware,
  userIdExistsMiddleware,
  userIsOwnerMiddleware,
  patchUserController
);

usersRoutes.delete(
  "/:id",
  userIsAuthenticatedMiddleware,
  userIdExistsMiddleware,
  userIsAdminMiddleware,
  deleteUserController
);

export default usersRoutes
