interface ICreateCarDTO {
    name: string;
    description: string;
    daily_rate: number;
    licence_plate: string;
    fine_amount: number;
    brand: string;
    categoty_id: string;
}

export { ICreateCarDTO };
