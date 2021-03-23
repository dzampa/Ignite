import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const createSpeciticationUserCase = new CreateSpecificationUseCase(
    specificationRepository
);

const createSpecificationController = new CreateSpecificationController(
    createSpeciticationUserCase
);

export { createSpecificationController };
