import { CreateSponsorRequest } from "./request/CreateSponsorRequest.dto";

export class SponsorResponse {
  id: number;
  name: string;
  image: string;
  sponsorship: number;
  deleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(obj: CreateSponsorRequest) {
    Object.assign(this, obj);
  }
}
