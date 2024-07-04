import { PrismaClient } from "@prisma/client";
import { DocumentResponse } from "../entities/document/DocumentResponse.dto";
import { CreateDocumentRequest } from "../entities/document/dto/CreateDocument.dto";

export class DocumentRepository {
  private prisma: PrismaClient;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get(id: number): Promise<DocumentResponse> {
    return await this.prisma.document.findUnique({
      where: { id },
    });
  }
  async findByPostId(postId: number): Promise<DocumentResponse[]> {
    return await this.prisma.document.findMany({
      where: {
        postId: postId,
      },
    });
  }
  async getAll(): Promise<DocumentResponse[]> {
    return await this.prisma.document.findMany();
  }
  async create(
    documentData: CreateDocumentRequest,
    postId: number
  ): Promise<DocumentResponse> {
    return await this.prisma.document.create({
      data: {
        fileName: documentData.fileName,
        downloadPath: documentData.downloadPath,
        post: {
          connect: { id: postId },
        },
      },
    });
  }
  async update(id: number, entity: DocumentResponse): Promise<void> {
    await this.prisma.document.update({
      where: { id },
      data: entity,
    });
  }
  async delete(id: number): Promise<void> {
    await this.prisma.document.delete({
      where: { id },
    });
  }
}
