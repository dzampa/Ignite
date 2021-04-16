import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { SpecificationRepositoryInMemory } from "@modules/cars/repositories/in-memory/SpecificationRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";

import { CreateCarSpecificatonUseCase } from "./CreateCarSpecificatonUseCase";

let createCarSpecificatonUseCase: CreateCarSpecificatonUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationsRepositoryInMemory: SpecificationRepositoryInMemory;

describe("Create Car Specification", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        specificationsRepositoryInMemory = new SpecificationRepositoryInMemory();
        createCarSpecificatonUseCase = new CreateCarSpecificatonUseCase(
            carsRepositoryInMemory,
            specificationsRepositoryInMemory
        );
    });

    it("should be able o add a new specification to a now-exitent car", async () => {
        expect(async () => {
            const car_id = "1234";
            const specifications_id = ["54321"];
            await createCarSpecificatonUseCase.execute({
                car_id,
                specifications_id,
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able o add a new specification to the car", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Brand",
            category_id: "category",
        });

        const specification = await specificationsRepositoryInMemory.create({
            description: "Test",
            name: "Test",
        });

        const specifications_id = [specification.id];

        const specificatonCars = await createCarSpecificatonUseCase.execute({
            car_id: car.id,
            specifications_id,
        });

        expect(specificatonCars).toHaveProperty("specifications");
        expect(specificatonCars.specifications.length).toBe(1);
    });
});
