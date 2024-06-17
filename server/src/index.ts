import express, { Request, Response } from "express";
import "reflect-metadata";
import postRouter from "./presentation/router/post.router";
import bodyParser from "body-parser";
import postFactory from "./presentation/factories/postFactory";
import memberFactory from "./presentation/factories/memberFactory";
import sponsorFactory from "./presentation/factories/sponsorFactory";
import memberRouter from "./presentation/router/member.router";
import sponsorRouter from "./presentation/router/sponsor.router";
import adminFactory from "./presentation/factories/adminFactory";
import adminRouter from "./presentation/router/admin.router";
import cors from "cors";
import PrismaClientSingleton from "./utils/prismaClient";

const app = express();
const prismaClient = PrismaClientSingleton.getInstance();

const postFact = postFactory(prismaClient);
const memberFact = memberFactory(prismaClient);
const sponsorFact = sponsorFactory(prismaClient);
const adminFact = adminFactory(prismaClient);

app.use(bodyParser.json());
app.use(cors());

app.use("/posts", postRouter(postFact));
app.use("/admin", adminRouter(adminFact));
app.use("/members", memberRouter(memberFact));
app.use("/sponsors", sponsorRouter(sponsorFact));

const PORT = 3030;

app.get("/", (req: Request, res: Response) => {
  res.send("Bem-vindo!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
