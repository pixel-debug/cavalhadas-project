import express from "express";
import { validateRequest } from "../../utils/middlewere/desiralise";
import { CreatePostRequest } from "../../entities/post/dto/request/CreatePostRequest.dto";

const router = express.Router();

export default function postRouter(controller) {
  router.post("/posts", validateRequest(CreatePostRequest), controller.create);

  return router;
}
