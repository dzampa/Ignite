import { inject, injectable } from "tsyringe";

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
            throw new Error("Specification Already Exists!");
        }
        await this.specificationRepository.create({ description, name });
    }
}

export { CreateSpecificationUseCase };
