import { CarImage } from "../infra/typeorm/entities/CarImage";

interface ICarsImagesRepository {
    create(data: CarImage): Promise<CarImage>;
    findByCarId(car_id: string): Promise<CarImage[]>;
}

export { ICarsImagesRepository };
