import express, { request, response } from "express";

const app = express();

app.use(express.json);

app.get("/", (request, response) => {
    return response.json({ message: "Hello World" });
});

app.post("/course", (request, response) => {
    const { name } = request.body;
    return response.json({ name });
});

app.listen(3333, () => console.log("The Server is running!"));
