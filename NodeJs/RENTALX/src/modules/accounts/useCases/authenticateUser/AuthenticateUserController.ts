import { Request, Response } from "express";
import { container } from "tsyringe";

import { AuthenticateUserUserCase } from "./AuthenticateUserUserCase";

class AuthenticateUserControler {
    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;
        const authenticateUserUserCase = container.resolve(
            AuthenticateUserUserCase
        );

        const autheticateInfo = await authenticateUserUserCase.execute({
            password,
            email,
        });

        return response.json(autheticateInfo);
    }
}

export { AuthenticateUserControler };
