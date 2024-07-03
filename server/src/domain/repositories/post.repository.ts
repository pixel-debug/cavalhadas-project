import { Prisma, PrismaClient } from "@prisma/client";
import { PostResponse } from "../entities/post/dto/PostResponse.dto";
import { CreatePostRequest } from "../entities/post/dto/request/CreatePostRequest.dto";
import { UpdatePostRequest } from "../entities/post/dto/request/UpdatePostRequest.dto";
import { DeletePostRequest } from "../entities/post/dto/request/DeletePostRequest.dto";
import { IRepository } from "./interfaces/IRepository";

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
    return this.prisma.post.findUnique({
      where: { id },
    });
  }

  async getAll(): Promise<PostResponse[]> {
    return this.prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
  }

  async getPaginated(limit: number, page: number): Promise<PostResponse[]> {
    const skip = (page - 1) * limit;
    return this.prisma.post.findMany({
      take: limit,
      skip,
      orderBy: { createdAt: "desc" },
    });
  }

  async create(entity: CreatePostRequest): Promise<PostResponse> {
    const { title, content, image, authorId, pdfs } = entity;
    const createdPost = await this.prisma.post.create({
      data: {
        title,
        content,
        image,
        authorId,
        pdfs: {
          createMany: {
            data: pdfs.map((doc) => ({
              fileName: doc.fileName,
              downloadPath: doc.downloadPath,
            })),
          },
        },
      },
      include: {
        pdfs: true,
      },
    });
    return createdPost;
  }

  async update(id: number, entity: UpdatePostRequest): Promise<void> {
    const updatedPost = await this.prisma.post.update({
      where: { id },
      data: entity,
      include: {
        pdfs: true,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.prisma.post.delete({
      where: { id },
    });
  }
}
