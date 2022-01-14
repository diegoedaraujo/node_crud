import { getRepository } from "typeorm";
import { Category } from "../../../entities/Category";

export class GetCategoriesByIdService {
  async execute(id: string): Promise<Category | Error> {
    const repo = getRepository(Category);
    if (!(await repo.findOne(id))) {
      return new Error("Category does not exists");
    }
    const category = await repo.findOne(id);
    return category;
  }
}
