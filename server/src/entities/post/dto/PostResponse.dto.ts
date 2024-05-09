import { CreatePostRequest } from "./request/CreatePostRequest.dto";

export class PostResponse {
  id: number;
  title: string;
  content: string;
  image: string;
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(obj: CreatePostRequest) {
    Object.assign(this, obj);
  }
}
