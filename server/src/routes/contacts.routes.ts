import { Router } from "express";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  listUniqueContactController,
  patchContactController,
} from "../controllers/contacts.controllers";
import { contactExistsMiddleware } from "../middlewares/contacts/contactExists.middleware";
import { userIsAuthenticatedMiddleware } from "../middlewares/users/userIsAuthenticated.middleware";
import {
  createContactSchema,
  editContactSchema,
} from "../schemas/contacts.schemas";
import validateSchemaMiddleware from "../middlewares/global/validateSchema.middleware";
import { userIsAdminMiddleware } from "../middlewares/users/userIsAdmin.middleware";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  validateSchemaMiddleware(createContactSchema),
  userIsAuthenticatedMiddleware,
  createContactController
);

contactsRoutes.get(
  "",
  userIsAuthenticatedMiddleware,
  listContactsController
);

contactsRoutes.get(
  "/:id",
  userIsAuthenticatedMiddleware,
  contactExistsMiddleware,
  listUniqueContactController
);

contactsRoutes.patch(
  "/:id",
  validateSchemaMiddleware(editContactSchema),
  userIsAuthenticatedMiddleware,
  contactExistsMiddleware,
  patchContactController
);

contactsRoutes.delete(
  "/:id",
  userIsAuthenticatedMiddleware,
  contactExistsMiddleware,
  deleteContactController
);

export { contactsRoutes };
