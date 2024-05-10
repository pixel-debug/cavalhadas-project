import { AdminResponse } from "../domain/entities/admin/dto/AdminResponse.dto";
import { AdminUseCase } from "../domain/useCases/adminUseCase";
import { HttpStatus, HttpMessages } from "../utils/httpResponse";
import { IController } from "./interfaces/IController";
import { Request, Response } from "express";

export class AdminController implements IController<AdminResponse> {
  constructor(private adminUseCase: AdminUseCase) {}

  async get(req: Request, res: Response): Promise<AdminResponse> {
    try {
      const id = Number(req.params.id);
      const admin = await this.adminUseCase.get(id);
      res.status(HttpStatus.OK).json(admin);
      return admin;
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }

  async getAll(req: Request, res: Response): Promise<AdminResponse[]> {
    try {
      const admins = await this.adminUseCase.getAll();
      res.status(HttpStatus.OK).json(admins);
      return admins;
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const adminData = req.body;
      const admin = await this.adminUseCase.create(adminData);
      res.status(HttpStatus.CREATED).json(admin);
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
      const updatedadmin = await this.adminUseCase.update(id, body);
      res.status(HttpStatus.OK).json(updatedadmin);
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
      const deletedadmin = await this.adminUseCase.delete(id);
      res.status(HttpStatus.OK).json(deletedadmin);
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
}
