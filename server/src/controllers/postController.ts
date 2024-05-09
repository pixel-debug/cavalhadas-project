import { PostResponse } from "../entities/post/dto/PostResponse.dto";
import { CreatePostRequest } from "../entities/post/dto/request/CreatePostRequest.dto";
import { PostUseCase } from "../domain/useCases/postUseCase";
import { IController } from "./interfaces/IController";

export class PostController implements IController<PostResponse> {
  constructor(private postUseCase: PostUseCase) {
    this.postUseCase = postUseCase;
  }

  get(req: Request, res: Response): Promise<PostResponse> {
    throw new Error("Method not implemented.");
  }
  getAll(req: Request, res: Response): Promise<PostResponse[]> {
    throw new Error("Method not implemented.");
  }
  async create(req: Request, res: Response): Promise<PostResponse> {
    try {
      const postData = req.body;
      console.log(postData);
      // const post = await this.postUseCase.create(postData);
      return null;
    } catch (error) {
      console.error(error);
    }
  }
  update(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
