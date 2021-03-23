import { Response, Request } from "express";

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
    constructor(
        private createSpeciticationUserCase: CreateSpecificationUseCase
    ) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;

        this.createSpeciticationUserCase.execute({ name, description });

        return response.status(201).send();
    }
}

export { CreateSpecificationController };
