import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

export class GetAllCategoriesService {
  async execute(): Promise<Category[] | Error> {
    const repo = getRepository(Category);
    const categories = await repo.find();
    return categories;
  }
}
