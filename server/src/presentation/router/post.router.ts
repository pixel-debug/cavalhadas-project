import express, { Request, Response } from "express";
import { CreatePostRequest } from "../../domain/entities/post/dto/request/CreatePostRequest.dto";
import { validateRequest } from "../../utils/middlewere/desiralise";
import { PostController } from "../../controllers/postController";
import { UpdatePostRequest } from "../../domain/entities/post/dto/request/UpdatePostRequest.dto";

const router = express.Router();

export default function postRouter(controller: PostController) {
  router.post(
    "/posts",
    validateRequest(CreatePostRequest),
    (req: Request, res: Response) => {
      controller.create(req, res);
    }
  );

  router.get("/posts", (req: Request, res: Response) => {
    controller.getAll(req, res);
  });

  router.get("/posts/:id", (req: Request, res: Response) => {
    controller.get(req, res);
  });

  router.delete("/posts/:id", (req: Request, res: Response) => {
    controller.delete(req, res);
  });

  router.put(
    "/posts/:id",
    validateRequest(UpdatePostRequest),
    (req: Request, res: Response) => {
      controller.update(req, res);
    }
  );

  return router;
}
