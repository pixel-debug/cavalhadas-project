import { PostResponse } from "../entities/post/dto/PostResponse.dto";
import { CreatePostRequest } from "../entities/post/dto/request/CreatePostRequest.dto";
import { DeletePostRequest } from "../entities/post/dto/request/DeletePostRequest.dto";
import { UpdatePostRequest } from "../entities/post/dto/request/UpdatePostRequest.dto";
import { IRepository } from "./interfaces/IRepository";
import { PrismaClient } from "@prisma/client";

export class PostRepository
  implements
    IRepository<
      PostResponse,
      CreatePostRequest,
      UpdatePostRequest,
      DeletePostRequest
    >
{
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get(id: number): Promise<PostResponse | null> {
    return await this.prisma.post.findUnique({
      where: { id },
    });
  }
  async getAll(): Promise<PostResponse[]> {
    return await this.prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  }
  async getPaginated(limit: number, page: number): Promise<PostResponse[]> {
    const skip = (page - 1) * limit;
    return await this.prisma.post.findMany({
      take: limit,
      skip: skip,
      orderBy: { createdAt: "desc" },
    });
  }
  async create(entity: CreatePostRequest): Promise<PostResponse> {
    return await this.prisma.post.create({
      data: entity,
    });
  }
  async update(id: number, entity: UpdatePostRequest): Promise<void> {
    await this.prisma.post.update({
      where: { id },
      data: entity,
    });
  }
  async delete(id: number): Promise<void> {
    await this.prisma.post.delete({
      where: { id },
    });
  }
}
