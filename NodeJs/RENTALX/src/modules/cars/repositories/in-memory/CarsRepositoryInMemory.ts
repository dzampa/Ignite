import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

import { ICarsRepository } from "../ICarsRepository";

class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];
    async create({
        brand,
        categoty_id,
        daily_rate,
        description,
        fine_amount,
        name,
        licence_plate,
    }: ICreateCarDTO): Promise<Car> {
        const car = new Car();

        Object.assign(car, {
            brand,
            categoty_id,
            daily_rate,
            description,
            fine_amount,
            name,
            licence_plate,
        });

        this.cars.push(car);

        return car;
    }

    async findByLicensePlate(licence_plate: string): Promise<Car> {
        return this.cars.find((car) => car.license_plate === licence_plate);
    }
}

export { CarsRepositoryInMemory };
