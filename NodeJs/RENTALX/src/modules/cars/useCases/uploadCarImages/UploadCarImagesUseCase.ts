import { inject, injectable } from "tsyringe";

import { CarImage } from "@modules/cars/infra/typeorm/entities/CarImage";
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository";
import { IStorageProvider } from "@shared/container/providers/StorageProvider/IStorageProvider";
import { deleteFile } from "@utils/file";

interface IRequest {
    car_id: string;
    images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
    constructor(
        @inject("CarsImagesRepository")
        private carsImagesRepository: ICarsImagesRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider
    ) {}
    async execute({ car_id, images_name }: IRequest): Promise<void> {
        const oldCarsImage = await this.carsImagesRepository.findByCarId(
            car_id
        );
        images_name.map(async (image) => {
            const newCarImage = new CarImage();
            newCarImage.image_name = image;
            newCarImage.car_id = car_id;
            if (oldCarsImage.length > 0) {
                oldCarsImage.map(async (carImage) => {
                    if (
                        carImage.image_name.includes(
                            image.substring(image.lastIndexOf("-"))
                        )
                    ) {
                        await deleteFile(`./tmp/cars/${carImage.image_name}`);
                        await this.storageProvider.delete(
                            `${carImage.image_name}`,
                            "cars"
                        );
                        newCarImage.id = carImage.id;
                        newCarImage.created_at = carImage.created_at;
                        await this.carsImagesRepository.create(newCarImage);
                        await this.storageProvider.save(image, "cars");
                    }
                });
            } else {
                await this.carsImagesRepository.create(newCarImage);
                await this.storageProvider.save(image, "cars");
            }
        });
    }
}

export { UploadCarImagesUseCase };
