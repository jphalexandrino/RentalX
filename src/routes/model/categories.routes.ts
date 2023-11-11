import { Router, request, response } from "express";

import { Category } from "./Category";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    return response.status(201).send();
});

export { categoriesRoutes };
