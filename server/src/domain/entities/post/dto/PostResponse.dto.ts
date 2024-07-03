import { DocumentResponse } from "../../document/DocumentResponse.dto";
import { CreatePostRequest } from "./request/CreatePostRequest.dto";

export class PostResponse {
  id: number;
  title: string;
  content: string;
  image: string;
  pdfs?: DocumentResponse[];
  published?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(obj: CreatePostRequest) {
    Object.assign(this, obj);
  }
}
