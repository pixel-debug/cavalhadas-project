import { AdminResponse } from "../entities/admin/dto/AdminResponse.dto";
import { CreateAdminRequest } from "../entities/admin/dto/request/CreateAdminRequest.dto";
import { DeleteAdminRequest } from "../entities/admin/dto/request/DeleteAdminRequest.dto";
import { UpdateAdminRequest } from "../entities/admin/dto/request/UpdateAdminRequest.dto";
import { AdminRepository } from "../repositories/admin.repository";
import { IUseCase } from "./interfaces/IUseCase";

export class AdminUseCase
  implements
    IUseCase<
      AdminResponse,
      CreateAdminRequest,
      UpdateAdminRequest,
      DeleteAdminRequest
    >
{
  constructor(private adminRepository: AdminRepository) {}

  async get(id: number): Promise<AdminResponse> {
    return await this.adminRepository.get(id);
  }
  async getAll(): Promise<AdminResponse[]> {
    return await this.adminRepository.getAll();
  }
  async create(entity: CreateAdminRequest): Promise<AdminResponse> {
    return await this.adminRepository.create(entity);
  }
  async update(id: number, entity: UpdateAdminRequest): Promise<void> {
    return await this.adminRepository.update(id, entity);
  }
  async delete(id: number): Promise<void> {
    return await this.adminRepository.delete(id);
  }
  async findByEmail(email: string): Promise<AdminResponse> {
    return await this.adminRepository.findByEmail(email);
  }
}
