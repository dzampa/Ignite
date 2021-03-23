import { Response, Request } from "express";

import { ListSpeciticationUseCase } from "./ListSpecificationUserCase";

class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpeciticationUseCase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listSpecificationUseCase.execute();
        return response.json(all);
    }
}

export { ListSpecificationController };
