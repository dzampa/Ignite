import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListSpeciticationUseCase } from "./ListSpecificationUserCase";

class ListSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listSpecificationUseCase = container.resolve(
            ListSpeciticationUseCase
        );

        const all = await listSpecificationUseCase.execute();
        return response.json(all);
    }
}

export { ListSpecificationController };
