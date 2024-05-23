import { CreateAdminRequest } from "./request/CreateAdminRequest.dto";

export class AdminResponse {
  id: number;
  name: string;
  email: string;
  trinco: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(obj: CreateAdminRequest) {
    Object.assign(this, obj);
  }
}
