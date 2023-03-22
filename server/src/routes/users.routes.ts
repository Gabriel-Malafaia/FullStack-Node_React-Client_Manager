import { Router } from "express";

const usersRoutes = Router();

usersRoutes.post("");
usersRoutes.get("");
usersRoutes.get("/:id");
usersRoutes.patch("/:id");
usersRoutes.delete("/:id");

export { usersRoutes };
