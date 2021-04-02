import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../erros/AppError";
import { ISpecificationsRepositoy } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationRepository: ISpecificationsRepositoy
    ) {}
    async execute({ name, description }: IRequest): Promise<void> {
        const specificationAlreadyExists = await this.specificationRepository.findByName(
            name
        );

        if (specificationAlreadyExists) {
            throw new AppError("Specification Already Exists!");
        }
        await this.specificationRepository.create({ description, name });
    }
}

export { CreateSpecificationUseCase };
