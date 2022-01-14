import { Request, Response } from "express";
import { GetCategoriesByIdService } from "../services/GetCategoriesByIdService";

export class GetCategoriesByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new GetCategoriesByIdService();
    const categories = await service.execute({ id });
    return response.json(categories);
  }
}
