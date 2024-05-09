import express, { Request, Response } from "express";
import postRouter from "./presentation/router/post.router";
import createPostFactory from "./presentation/factories/postFactory";
import bodyParser from "body-parser";

const app = express();

const postFact = createPostFactory();
const controller = postFact;
app.use(bodyParser.json());

app.use(postRouter(controller));
const PORT = 3030;

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
