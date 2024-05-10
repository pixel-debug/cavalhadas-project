import { PrismaClient } from "@prisma/client";
import { SponsorRepository } from "../../domain/repositories/sponsor.repository";
import { SponsorUseCase } from "../../domain/useCases/sponsorUseCase";
import { SponsorController } from "../../controllers/sponsorController";

export default function sponsorFactory(prismaClient: PrismaClient) {
  const repo = new SponsorRepository(prismaClient);
  const service = new SponsorUseCase(repo);
  const controller = new SponsorController(service);

  return controller;
}
