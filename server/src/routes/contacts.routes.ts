import { Router } from "express";

const contactsRoutes = Router();

contactsRoutes.post("");
contactsRoutes.get("");
contactsRoutes.get("/:id");
contactsRoutes.patch("/:id");
contactsRoutes.delete("/:id");

export { contactsRoutes };
