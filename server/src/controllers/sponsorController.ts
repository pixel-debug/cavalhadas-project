import { SponsorResponse } from "../domain/entities/sponsor/dto/SponsorResponse.dto";
import { SponsorUseCase } from "../domain/useCases/sponsorUseCase";
import FirebaseImage from "../utils/firebase/firebase";
import { HttpMessages, HttpStatus } from "../utils/httpResponse";
import { IController } from "./interfaces/IController";
import { Request, Response } from "express";

export class SponsorController implements IController<SponsorResponse> {
  constructor(private sponsorUseCase: SponsorUseCase) {}

  async get(req: Request, res: Response): Promise<SponsorResponse> {
    try {
      const id = Number(req.params.id);
      const sponsor = await this.sponsorUseCase.get(id);
      res.status(HttpStatus.OK).json(sponsor);
      return sponsor;
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
  async getAll(req: Request, res: Response): Promise<SponsorResponse[]> {
    try {
      const sponsors = await this.sponsorUseCase.getAll();
      res.status(HttpStatus.OK).json(sponsors);
      return sponsors;
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
  async create(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const imageBase64 = body.image;
      if (!imageBase64) {
        res
          .status(HttpStatus.BAD_REQUEST)
          .json({ error: "No image data found." });
        return;
      }
      const imageUrl = await FirebaseImage(imageBase64);
      body.image = imageUrl;

      const sponsor = await this.sponsorUseCase.create(body);
      res.status(HttpStatus.OK).json(sponsor);
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
      const sponsor = await this.sponsorUseCase.update(id, body);
      res.status(HttpStatus.OK).json(sponsor);
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
      const sponsor = await this.sponsorUseCase.delete(id);
      res.status(HttpStatus.OK).json(sponsor);
    } catch (error) {
      console.error(error);
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .json({ error: HttpMessages.INTERNAL_SERVER_ERROR });
    }
  }
}
