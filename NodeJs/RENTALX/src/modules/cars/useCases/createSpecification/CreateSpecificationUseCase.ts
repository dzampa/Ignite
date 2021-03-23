import { ISpecificationRepositoy } from "../../repositories/ISpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationRepository: ISpecificationRepositoy) {}
    execute({ name, description }: IRequest): void {
        const specificationAlreadyExists = this.specificationRepository.findByName(
            name
        );

        if (specificationAlreadyExists) {
            throw new Error("Secification Already Exists!");
        }
        this.specificationRepository.create({ description, name });
    }
}

export { CreateSpecificationUseCase };
