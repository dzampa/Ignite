import { Router } from "express";

import { CreateUserCotroller } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const createUserCotroller = new CreateUserCotroller();

usersRoutes.post("/", createUserCotroller.handle);

export { usersRoutes };
