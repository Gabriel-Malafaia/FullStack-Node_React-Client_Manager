import validateSchemaMiddleware from "../middlewares/global/validateSchema.middleware";
import { Router } from "express";
import { contactExistsMiddleware } from "../middlewares/contacts/contactExists.middleware";
import { userIsAuthenticatedMiddleware } from "../middlewares/users/userIsAuthenticated.middleware";
import {
  createContactSchema,
  createInfoSchema,
  editContactSchema,
  editInfoSchema,
} from "../schemas/contacts.schemas";
import {
  createContactController,
  deleteContactController,
  listContactsController,
  listUniqueContactController,
  patchContactController,
} from "../controllers/contacts.controllers";
import {
  createContactInfoController,
  deleteContactInfoController,
  patchContactInfoController,
} from "../controllers/contactsInfo.controllers";
import { phoneExistsMiddleware } from "../middlewares/contacts/phoneExists.middleware";
import { infoExistsMiddleware } from "../middlewares/contacts/infoExists.middleware";

const contactsRoutes = Router();

contactsRoutes.post(
  "",
  validateSchemaMiddleware(createContactSchema),
  userIsAuthenticatedMiddleware,
  phoneExistsMiddleware,
  createContactController
);

contactsRoutes.get("", userIsAuthenticatedMiddleware, listContactsController);

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

// Contact Infos Routes

contactsRoutes.post(
  "/info/:id",
  userIsAuthenticatedMiddleware,
  validateSchemaMiddleware(createInfoSchema),
  contactExistsMiddleware,
  phoneExistsMiddleware,
  createContactInfoController
);

contactsRoutes.patch(
  "/info/:contact_id",
  validateSchemaMiddleware(editInfoSchema),
  userIsAuthenticatedMiddleware,
  infoExistsMiddleware,
  patchContactInfoController
);

contactsRoutes.delete(
  "/info/:contact_id",
  userIsAuthenticatedMiddleware,
  infoExistsMiddleware,
  deleteContactInfoController
);

export default contactsRoutes
