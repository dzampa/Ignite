import { Router } from "express";

import { AuthenticateUserControler } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserControler = new AuthenticateUserControler();

authenticateRoutes.post("/sessions", authenticateUserControler.handle);

export { authenticateRoutes };
