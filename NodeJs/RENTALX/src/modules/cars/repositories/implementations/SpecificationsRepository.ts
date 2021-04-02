import { getRepository, Repository } from "typeorm";

import { Specification } from "../../entities/Specification";
import {
    ICreateSpecificationDTO,
    ISpecificationsRepositoy,
} from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepositoy {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({
            description,
            name,
        });

        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {
        const specifications = this.repository.find();
        return specifications;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ name });
        return specification;
    }
}

export { SpecificationsRepository };
