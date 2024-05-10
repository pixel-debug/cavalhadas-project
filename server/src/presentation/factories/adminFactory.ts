import { PrismaClient } from "@prisma/client";
import { AdminController } from "../../controllers/adminController";
import { AdminRepository } from "../../domain/repositories/admin.repository";
import { AdminUseCase } from "../../domain/useCases/adminUseCase";

export default function adminFactory(prismaClient: PrismaClient) {
  const repo = new AdminRepository(prismaClient);
  const service = new AdminUseCase(repo);
  const controller = new AdminController(service);

  return controller;
}
