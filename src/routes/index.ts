import { Router } from "express";
import { CreateVideoController } from "../controllers/CreateVideoController";
import { GetAllVideosController } from "../controllers/GetAllVideosController";
import { categoriesRoutes } from "./categories.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
export { routes };
