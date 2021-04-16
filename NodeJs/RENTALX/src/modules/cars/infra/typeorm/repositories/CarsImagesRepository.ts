import { getRepository, Repository } from "typeorm";

import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";

import { CarImage } from "../entities/CarImage";

class CarsImagesRepository implements ICarsImagesRepository {
    private repository: Repository<CarImage>;

    constructor() {
        this.repository = getRepository(CarImage);
    }

    async create({
        id,
        car_id,
        image_name,
        created_at,
    }: CarImage): Promise<CarImage> {
        const carImage = this.repository.create({
            id,
            car_id,
            image_name,
            created_at,
        });

        await this.repository.save(carImage);
        return carImage;
    }

    async findByCarId(car_id: string): Promise<CarImage[]> {
        const carImages = await this.repository.find({ car_id });
        return carImages;
    }
}

export { CarsImagesRepository };
