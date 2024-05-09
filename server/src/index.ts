import express from "express";

import postRouter from "./presentation/router/post.router";
import createPostFactory from "./presentation/factories/postFactory";

const app = express();
const postFact = createPostFactory();
const { controller } = postFact;
app.use(postRouter(controller));

const port = 3333;
app.listen(port, () => {
  console.log(`server running on ${port} `);
});
