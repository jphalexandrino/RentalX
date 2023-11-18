import { Router, request, response } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/categoriesRepository";
import { CreateCategoryService } from "../modules/cars/service/CreateCategoryService";
import { PostgresCategoriesRepository } from "../modules/cars/repositories/PostgresCategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoriesRepository(); // LSP

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const createCategoryService = new CreateCategoryService(
        categoriesRepository,
    );

    createCategoryService.execute({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
});

export { categoriesRoutes };
