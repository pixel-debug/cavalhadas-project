import express, { Request, Response } from "express";
import { CreatePostRequest } from "../../domain/entities/post/dto/request/CreatePostRequest.dto";
import { validateRequest } from "../../utils/middlewere/desiralise";
import { PostController } from "../../controllers/postController";
import { UpdatePostRequest } from "../../domain/entities/post/dto/request/UpdatePostRequest.dto";
import { Authentication } from "../../utils/middlewere/authentication";

const router = express.Router();
export default function postRouter(controller: PostController) {
  router.post(
    "/",
    Authentication,
    validateRequest(CreatePostRequest),
    (req: Request, res: Response) => {
      controller.create(req, res);
    }
  );

  router.get("/", (req: Request, res: Response) => {
    controller.getAll(req, res);
  });

  router.get("/paginated", (req: Request, res: Response) => {
    controller.getPaginated(req, res);
  });

  router.get("/:id", (req: Request, res: Response) => {
    controller.get(req, res);
  });

  router.delete("/:id", Authentication, (req: Request, res: Response) => {
    controller.delete(req, res);
  });

  router.put(
    "/:id",
    Authentication,
    validateRequest(UpdatePostRequest),
    (req: Request, res: Response) => {
      controller.update(req, res);
    }
  );

  return router;
}
