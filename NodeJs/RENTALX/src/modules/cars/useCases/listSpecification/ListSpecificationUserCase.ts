import { Specification } from "../../model/Specification";
import { ISpecificationRepositoy } from "../../repositories/ISpecificationsRepository";

class ListSpeciticationUseCase {
    constructor(private specificationRepository: ISpecificationRepositoy) {}
    execute(): Specification[] {
        const specifications = this.specificationRepository.list();

        return specifications;
    }
}

export { ListSpeciticationUseCase };
