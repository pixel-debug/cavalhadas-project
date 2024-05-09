import { CreateMemberRequest } from "./request/createMemberRequest";

export class MemberResponse {
  id: number;
  name: string;
  role: string;
  image: string;
  memberSince: Date;
  isAdm: boolean;
  isMale: boolean;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(obj: CreateMemberRequest) {
    Object.assign(this, obj);
  }
}
