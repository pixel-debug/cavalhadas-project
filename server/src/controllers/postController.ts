import { PostResponse } from "../domain/entities/post/dto/PostResponse.dto";
import { PostUseCase } from "../domain/useCases/postUseCase";
import { HttpStatus, HttpMessages } from "../utils/httpResponse";
import { IController } from "./interfaces/IController";
import { Request, Response } from "express";

export class PostController implements IController<PostResponse> {
  constructor(private postUseCase: PostUseCase) {}

  async get(req: Request, res: Response): Promise<PostResponse> {
    try {
      const id = Number(req.params.id);
      const post = await this.postUseCase.get(id);
      res.status(HttpStatus.OK).json(post);
      return post;
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }

  async getAll(req: Request, res: Response): Promise<PostResponse[]> {
    try {
      const posts = await this.postUseCase.getAll();
      res.status(HttpStatus.OK).json(posts);
      return posts;
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const postData = req.body;
      const post = await this.postUseCase.create(postData);

      res.status(HttpStatus.CREATED).json(post);
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const body = req.body;
      const updatedPost = await this.postUseCase.update(id, body);
      res.status(HttpStatus.OK).json(updatedPost);
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = Number(req.params.id);
      const deletedPost = await this.postUseCase.delete(id);
      res.status(HttpStatus.OK).json(deletedPost);
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
}
