import express, { request, response } from "express";
import { categoriesRoutes } from "./routes/model/categories.routes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("The Server is running!"));
