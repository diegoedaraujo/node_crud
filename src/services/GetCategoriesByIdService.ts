import { getRepository } from "typeorm";
import { Category } from "../entities/Category";

type GetCategoriesByIdRequest = {
  id: string;
};
export class GetCategoriesByIdService {
  async execute({ id }: GetCategoriesByIdRequest): Promise<Category | Error> {
    const repo = getRepository(Category);
    if (!id) {
      throw new Error("ID was not provided");
    }
    const category = await repo.findOne(id);
    return category;
  }
}
