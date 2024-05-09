import { Request, Response } from "express";

export interface IController<Entity> {
  get(req: Request, res: Response): Promise<Entity | null>;
  getAll(req: Request, res: Response): Promise<Entity[] | null>;
  create(req: Request, res: Response): Promise<Entity>;
  update(req: Request, res: Response): Promise<void>;
  delete(req: Request, res: Response): Promise<void>;
}
