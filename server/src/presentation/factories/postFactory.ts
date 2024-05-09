import { PostController } from "../../controllers/postController";
import { PostRepository } from "../../domain/repositories/post.repository";
import { PostUseCase } from "../../domain/useCases/postUseCase";
import { prismaClient } from "../../utils/prismaClient";

export default function createPostFactory() {
  const repo = new PostRepository(prismaClient);
  const service = new PostUseCase(repo);
  const controller = new PostController(service);

  return {
    controller,
  };
}
