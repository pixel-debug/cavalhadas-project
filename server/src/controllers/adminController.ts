import { AdminResponse } from "../domain/entities/admin/dto/AdminResponse.dto";
import { AdminUseCase } from "../domain/useCases/adminUseCase";
import { HttpStatus, HttpMessages } from "../utils/httpResponse";
import { IController } from "./interfaces/IController";
import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
      const hashPassword = await bcrypt.hash(adminData.trinco, 10);

      const admin = await this.adminUseCase.create({
        ...adminData,
        trinco: hashPassword,
      });

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

  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, trinco } = req.body;
      const admin = await this.adminUseCase.findByEmail(email);
      if (!admin) throw new Error(HttpMessages.BAD_REQUEST);

      const verifyPass = await bcrypt.compare(trinco, admin.trinco);

      if (!verifyPass) {
        throw new Error("E-mail ou senha inválidos");
      }
      const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET ?? "", {
        expiresIn: "8h",
      });

      const { trinco: _, ...adminLogin } = admin;

      return res.json({
        admin: adminLogin,
        token: token,
      });
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
}
