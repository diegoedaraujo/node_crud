import { Router } from "express";
import { CreateCategoryController } from "../modules/categories/controllers/CreateCategoryController";
import { DeleteCategoryController } from "../modules/categories/controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "../modules/categories/controllers/GetAllCategoriesController";
import { GetCategoriesByIdController } from "../modules/categories/controllers/GetCategoriesByIdController";
import { UpdateCategoryController } from "../modules/categories/controllers/UpdateCategoryController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const deleteCategoryController = new DeleteCategoryController();
const getAllCategoriesController = new GetAllCategoriesController();
const getCategoriesByIdController = new GetCategoriesByIdController();
const updateCategoryController = new UpdateCategoryController();

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", getAllCategoriesController.handle);
categoriesRoutes.get("/:id", getCategoriesByIdController.handle);
categoriesRoutes.delete("/:id", deleteCategoryController.handle);
categoriesRoutes.put("/:id", updateCategoryController.handle);

export { categoriesRoutes };
