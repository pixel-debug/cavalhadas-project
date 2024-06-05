import { MemberResponse } from "../domain/entities/member/dto/MemberResponse.dto";
import { MemberUseCase } from "../domain/useCases/memberUseCase";
import { HttpMessages, HttpStatus } from "../utils/httpResponse";
import { IController } from "./interfaces/IController";
import { Request, Response } from "express";

export class MemberController implements IController<MemberResponse> {
  constructor(private memberUseCase: MemberUseCase) {}

  async get(req: Request, res: Response): Promise<MemberResponse> {
    try {
      const id = Number(req.params.id);
      const member = await this.memberUseCase.get(id);
      res.status(HttpStatus.OK).json(member);
      return member;
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
  async getAll(req: Request, res: Response): Promise<MemberResponse[]> {
    try {
      const members = await this.memberUseCase.getAll();
      res.status(HttpStatus.OK).json(members);
      return members;
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
  async create(req: Request, res: Response): Promise<void> {
    try {
      const memberData = req.body;
      const member = await this.memberUseCase.create(memberData);
      res.status(HttpStatus.OK).json(member);
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
      const updatedMember = await this.memberUseCase.update(id, body);
      res.status(HttpStatus.OK).json(updatedMember);
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
      const deletedMember = await this.memberUseCase.delete(id);
      res.status(HttpStatus.OK).json(deletedMember);
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
  async getByFilter(req: Request, res: Response): Promise<MemberResponse[]> {
    try {
      const filter = req.params.filter;
      const filteredMembers = await this.memberUseCase.getByFilter(filter);
      res.status(HttpStatus.OK).json(filteredMembers);
      return filteredMembers;
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
}
