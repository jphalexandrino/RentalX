import { Specification } from "../model/Specification";

interface ICreateSpacificationDTO {
    name: string;
    description: string;
}

interface ISpacificationsRepository {
    create({ description, name }: ICreateSpacificationDTO): void;
    findByName(name: string): Specification;
}

export { ISpacificationsRepository, ICreateSpacificationDTO };
