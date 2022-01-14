import { Router } from "express";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { DeleteCategoryController } from "../controllers/DeleteCategoryController";
import { GetAllCategoriesController } from "../controllers/GetAllCategoriesController";
import { GetCategoriesByIdController } from "../controllers/GetCategoriesByIdController";
import { UpdateCategoryController } from "../controllers/UpdateCategoryController";

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
