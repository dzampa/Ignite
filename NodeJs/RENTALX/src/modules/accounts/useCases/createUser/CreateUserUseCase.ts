import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class CreateUserUserCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUsersRepository
    ) {}

    async execute({
        name,
        email,
        password,
        driver_license,
    }: ICreateUserDTO): Promise<void> {
        const userAlredyExists = await this.userRepository.findByEmail(email);

        if (userAlredyExists) {
            throw new Error("User already exists");
        }

        const passwordHash = await hash(password, 8);
        await this.userRepository.create({
            name,
            email,
            password: passwordHash,
            driver_license,
        });
    }
}

export { CreateUserUserCase };
