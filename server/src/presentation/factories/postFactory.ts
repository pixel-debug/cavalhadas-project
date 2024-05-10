import { PrismaClient } from "@prisma/client";
import { PostController } from "../../controllers/postController";
import { PostRepository } from "../../domain/repositories/post.repository";
import { PostUseCase } from "../../domain/useCases/postUseCase";

export default function postFactory(prismaClient: PrismaClient) {
  const repo = new PostRepository(prismaClient);
  const service = new PostUseCase(repo);
  const controller = new PostController(service);

  return controller;
}
