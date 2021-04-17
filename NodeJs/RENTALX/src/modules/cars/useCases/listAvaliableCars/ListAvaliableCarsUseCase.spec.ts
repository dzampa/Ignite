import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Car description",
            daily_rate: 140.0,
            license_plate: "DEF-1212",
            fine_amount: 100,
            brand: "Car_brand",
            category_id: "category-id",
        });
        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "Car description",
            daily_rate: 140.0,
            license_plate: "DEF-1212",
            fine_amount: 100,
            brand: "Car_brand_test",
            category_id: "category-id",
        });
        const cars = await listAvailableCarsUseCase.execute({
            brand: "Car_brand_test",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category_id", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Car description",
            daily_rate: 140.0,
            license_plate: "DEF-1212",
            fine_amount: 100,
            brand: "Car_brand_test",
            category_id: "202fb1cf-5419-462a-866d-2200f92c3fee",
        });
        const cars = await listAvailableCarsUseCase.execute({
            category_id: "202fb1cf-5419-462a-866d-2200f92c3fee",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car4",
            description: "Car description",
            daily_rate: 140.0,
            license_plate: "DEF-1212",
            fine_amount: 100,
            brand: "Car_brand_test",
            category_id: "category-id",
        });
        const cars = await listAvailableCarsUseCase.execute({
            name: "Car4",
        });

        expect(cars).toEqual([car]);
    });
});
