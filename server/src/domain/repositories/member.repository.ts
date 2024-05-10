import { PrismaClient } from "@prisma/client";
import { MemberResponse } from "../entities/member/dto/MemberResponse.dto";
import { DeleteMemberRequest } from "../entities/member/dto/request/DeleteMemberRequest.dto";
import { UpdateMemberRequest } from "../entities/member/dto/request/UpdateMemberRequest.dto";
import { CreateMemberRequest } from "../entities/member/dto/request/CreateMemberRequest";
import { IRepository } from "./interfaces/IRepository";
import { MemberFilterInput } from "../../utils/filters/members";

export class MemberRepository
  implements
    IRepository<
      MemberResponse,
      CreateMemberRequest,
      UpdateMemberRequest,
      DeleteMemberRequest
    >
{
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async get(id: number): Promise<MemberResponse> {
    return await this.prisma.member.findUnique({
      where: { id },
    });
  }
  async getAll(): Promise<MemberResponse[]> {
    return await this.prisma.member.findMany();
  }
  async create(entity: CreateMemberRequest): Promise<MemberResponse> {
    return await this.prisma.member.create({
      data: entity,
    });
  }
  async update(id: number, entity: UpdateMemberRequest): Promise<void> {
    await this.prisma.member.update({
      where: { id },
      data: entity,
    });
  }
  async delete(id: number): Promise<void> {
    await this.prisma.member.delete({
      where: { id },
    });
  }
  async getByFilter(where: MemberFilterInput): Promise<MemberResponse[]> {
    return await this.prisma.member.findMany({
      where,
    });
  }
}
