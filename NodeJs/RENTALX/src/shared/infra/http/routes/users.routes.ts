import { Router } from "express";
import multer from "multer";

import uploadConfig from "@config/upload";
import { CreateUserCotroller } from "@modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserAvatarController } from "@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

const usersRoutes = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserCotroller = new CreateUserCotroller();
const updateUserAvatarController = new UpdateUserAvatarController();

usersRoutes.post("/", createUserCotroller.handle);
usersRoutes.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    updateUserAvatarController.handle
);

export { usersRoutes };
