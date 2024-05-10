import { PrismaClient } from "@prisma/client";
import { IRepository } from "./interfaces/IRepository";
import { AdminResponse } from "../entities/admin/dto/AdminResponse.dto";
import { CreateAdminRequest } from "../entities/admin/dto/request/CreateAdminRequest.dto";
import { DeleteAdminRequest } from "../entities/admin/dto/request/DeleteAdminRequest.dto";
import { UpdateAdminRequest } from "../entities/admin/dto/request/UpdateAdminRequest.dto";

export class AdminRepository
  implements
    IRepository<
      AdminResponse,
      CreateAdminRequest,
      UpdateAdminRequest,
      DeleteAdminRequest
    >
{
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get(id: number): Promise<AdminResponse> {
    return await this.prisma.admin.findUnique({
      where: { id },
    });
  }
  async getAll(): Promise<AdminResponse[]> {
    return await this.prisma.admin.findMany();
  }
  async create(entity: CreateAdminRequest): Promise<AdminResponse> {
    return await this.prisma.admin.create({
      data: entity,
    });
  }
  async update(id: number, entity: UpdateAdminRequest): Promise<void> {
    await this.prisma.admin.update({
      where: { id },
      data: entity,
    });
  }
  async delete(id: number): Promise<void> {
    await this.prisma.admin.delete({
      where: { id },
    });
  }
}
