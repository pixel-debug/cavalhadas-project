import { SponsorResponse } from "../entities/sponsor/dto/SponsorResponse.dto";
import { CreateSponsorRequest } from "../entities/sponsor/dto/request/CreateSponsorRequest.dto";
import { DeleteSponsorRequest } from "../entities/sponsor/dto/request/DeleteSponsorRequest.dto";
import { UpdateSponsorRequest } from "../entities/sponsor/dto/request/UpdateSponsorRequest.dto";
import { SponsorRepository } from "../repositories/sponsor.repository";
import { IUseCase } from "./interfaces/IUseCase";

export class SponsorUseCase
  implements
    IUseCase<
      SponsorResponse,
      CreateSponsorRequest,
      UpdateSponsorRequest,
      DeleteSponsorRequest
    >
{
  constructor(private sponsorRepository: SponsorRepository) {}

  get(id: number): Promise<SponsorResponse> {
    return this.sponsorRepository.get(id);
  }
  getAll(): Promise<SponsorResponse[]> {
    return this.sponsorRepository.getAll();
  }
  create(entity: CreateSponsorRequest): Promise<SponsorResponse> {
    return this.sponsorRepository.create(entity);
  }
  update(id: number, entity: UpdateSponsorRequest): Promise<void> {
    return this.sponsorRepository.update(id, entity);
  }
  delete(): Promise<void> {
    return this.sponsorRepository.delete();
  }
}
