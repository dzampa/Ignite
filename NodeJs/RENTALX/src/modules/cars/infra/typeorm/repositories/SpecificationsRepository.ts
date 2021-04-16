import { getRepository, Repository } from "typeorm";

import {
    ICreateSpecificationDTO,
    ISpecificationsRepositoy,
} from "@modules/cars/repositories/ISpecificationsRepository";

import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepositoy {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({
        description,
        name,
    }: ICreateSpecificationDTO): Promise<Specification> {
        const specification = this.repository.create({
            description,
            name,
        });

        await this.repository.save(specification);

        return specification;
    }

    async list(): Promise<Specification[]> {
        const specifications = await this.repository.find();
        return specifications;
    }

    async findByName(name: string): Promise<Specification> {
        const specification = this.repository.findOne({ name });
        return specification;
    }
    async findByIds(ids: string[]): Promise<Specification[]> {
        const allSpecifications = await this.repository.findByIds(ids);

        return allSpecifications;
    }
}

export { SpecificationsRepository };
