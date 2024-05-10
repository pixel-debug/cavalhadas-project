import { PrismaClient } from "@prisma/client";
import { MemberRepository } from "../../domain/repositories/member.repository";
import { MemberUseCase } from "../../domain/useCases/memberUseCase";
import { MemberController } from "../../controllers/memberController";

export default function memberFactory(prismaClient: PrismaClient) {
  const repo = new MemberRepository(prismaClient);
  const service = new MemberUseCase(repo);
  const controller = new MemberController(service);

  return controller;
}
