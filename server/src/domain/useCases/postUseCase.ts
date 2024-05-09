import { PostResponse } from "../../entities/post/dto/PostResponse.dto";
import { CreatePostRequest } from "../../entities/post/dto/request/CreatePostRequest.dto";
import { DeletePostRequest } from "../../entities/post/dto/request/DeletePostRequest.dto";
import { UpdatePostRequest } from "../../entities/post/dto/request/UpdatePostRequest.dto";
import { PostRepository } from "../repositories/post.repository";
import { IUseCase } from "./interfaces/IUseCase";

export class PostUseCase
  implements
    IUseCase<
      PostResponse,
      CreatePostRequest,
      UpdatePostRequest,
      DeletePostRequest
    >
{
  constructor(private postRepository: PostRepository) {}

  async get(id: number): Promise<PostResponse> {
    return await this.postRepository.get(id);
  }
  async getAll(): Promise<PostResponse[]> {
    return await this.postRepository.getAll();
  }
  async create(entity: CreatePostRequest): Promise<PostResponse> {
    return await this.postRepository.create(entity);
  }
  async update(id: number, entity: UpdatePostRequest): Promise<void> {
    return await this.postRepository.update(id, entity);
  }
  async delete(id: DeletePostRequest): Promise<void> {
    return await this.postRepository.delete(id);
  }
}
