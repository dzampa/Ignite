import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationRepositoy } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpeciticationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepositoy
    ) {}
    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationRepository.list();

        return specifications;
    }
}

export { ListSpeciticationUseCase };
