import { Prisma, PrismaClient } from "@prisma/client";
import { SponsorResponse } from "../entities/sponsor/dto/SponsorResponse.dto";
import { CreateSponsorRequest } from "../entities/sponsor/dto/request/CreateSponsorRequest.dto";
import { DeleteSponsorRequest } from "../entities/sponsor/dto/request/DeleteSponsorRequest.dto";
import { UpdateSponsorRequest } from "../entities/sponsor/dto/request/UpdateSponsorRequest.dto";
import { IRepository } from "./interfaces/IRepository";

export class SponsorRepository
  implements
    IRepository<
      SponsorResponse,
      CreateSponsorRequest,
      UpdateSponsorRequest,
      DeleteSponsorRequest
    >
{
  private prisma: PrismaClient;
  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get(id: number): Promise<SponsorResponse> {
    return await this.prisma.sponsor.findUnique({
      where: { id },
    });
  }
  async getAll(): Promise<SponsorResponse[]> {
    return await this.prisma.sponsor.findMany();
  }
  async create(entity: CreateSponsorRequest): Promise<SponsorResponse> {
    return await this.prisma.sponsor.create({
      data: entity,
    });
  }
  async update(id: number, entity: UpdateSponsorRequest): Promise<void> {
    await this.prisma.sponsor.update({
      where: { id },
      data: entity,
    });
  }
  async delete(id: number): Promise<void> {
    await this.prisma.sponsor.delete({
      where: { id },
    });
  }
}
