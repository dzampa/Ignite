import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/repositories/implemantations/UserRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepository } from "../../modules/cars/repositories/implementations/SpecificationsRepository";
import { ISpecificationRepositoy } from "../../modules/cars/repositories/ISpecificationsRepository";

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationRepositoy>(
    "SpecificationRepository",
    SpecificationRepository
);

container.registerSingleton<IUsersRepository>("UserRepository", UserRepository);
