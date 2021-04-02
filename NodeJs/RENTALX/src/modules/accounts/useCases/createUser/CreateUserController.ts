import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUserCase } from "./CreateUserUseCase";

class CreateUserCotroller {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, driver_license } = request.body;
        const createUserUserCase = container.resolve(CreateUserUserCase);
        await createUserUserCase.execute({
            name,
            email,
            password,
            driver_license,
        });

        return response.status(201).send();
    }
}

export { CreateUserCotroller };
