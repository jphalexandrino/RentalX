import { Router, request, response } from "express";

import { CategoriesRepository } from "../model/categoriesRepository";
import { CreateCategoryService } from "../service/CreateCategoryService";
import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";

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
