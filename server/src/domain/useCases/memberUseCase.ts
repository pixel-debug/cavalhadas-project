import { MemberFilterInput } from "../../utils/filters/members";
import { MemberResponse } from "../entities/member/dto/MemberResponse.dto";
import { DeleteMemberRequest } from "../entities/member/dto/request/DeleteMemberRequest.dto";
import { UpdateMemberRequest } from "../entities/member/dto/request/UpdateMemberRequest.dto";
import { CreateMemberRequest } from "../entities/member/dto/request/CreateMemberRequest";
import { MemberRepository } from "../repositories/member.repository";
import { IUseCase } from "./interfaces/IUseCase";

export class MemberUseCase
  implements
    IUseCase<
      MemberResponse,
      CreateMemberRequest,
      UpdateMemberRequest,
      DeleteMemberRequest
    >
{
  constructor(private memberRepository: MemberRepository) {}

  get(id: number): Promise<MemberResponse> {
    return this.memberRepository.get(id);
  }
  getAll(): Promise<MemberResponse[]> {
    return this.memberRepository.getAll();
  }
  create(entity: CreateMemberRequest): Promise<MemberResponse> {
    return this.memberRepository.create(entity);
  }
  update(id: number, entity: UpdateMemberRequest): Promise<void> {
    return this.memberRepository.update(id, entity);
  }
  delete(id: number): Promise<void> {
    return this.memberRepository.delete(id);
  }
  async getByFilter(filter: string): Promise<MemberResponse[]> {
    const where: MemberFilterInput = {};
    if (filter.includes("isMale")) where.isMale = true;
    if (filter.includes("isAdm")) where.isAdm = true;

    return await this.memberRepository.getByFilter(where);
  }
}
