import express, { request, response } from "express";

const app = express();

app.use(express.json);

app.listen(3333, () => console.log("The Server is running!"));
