import { inject, injectable } from "tsyringe";

import { Specification } from "../../entities/Specification";
import { ISpecificationsRepositoy } from "../../repositories/ISpecificationsRepository";

@injectable()
class ListSpeciticationUseCase {
    constructor(
        @inject("SpecificationsRepository")
        private specificationsRepository: ISpecificationsRepositoy
    ) {}
    async execute(): Promise<Specification[]> {
        const specifications = await this.specificationsRepository.list();

        return specifications;
    }
}

export { ListSpeciticationUseCase };
