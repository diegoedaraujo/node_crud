import { Request, Response } from "express";
import { GetCategoriesByIdService } from "../services/GetCategoriesByIdService";

interface IParams {
  id: string;
}
export class GetCategoriesByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.query;
    const service = new GetCategoriesByIdService();
    const categories = await service.execute({ id: String(id) });
    return response.json(categories);
  }
}
