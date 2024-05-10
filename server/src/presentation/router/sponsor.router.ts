import express, { Request, Response } from "express";
import { SponsorController } from "../../controllers/sponsorController";
import { validateRequest } from "../../utils/middlewere/desiralise";
import { CreateSponsorRequest } from "../../domain/entities/sponsor/dto/request/CreateSponsorRequest.dto";
import { UpdateSponsorRequest } from "../../domain/entities/sponsor/dto/request/UpdateSponsorRequest.dto";

const router = express.Router();
export default function sponsorRouter(controller: SponsorController) {
  router.post(
    "/sponsor",
    validateRequest(CreateSponsorRequest),
    (req: Request, res: Response) => {
      controller.create(req, res);
    }
  );
  router.get("/sponsor", (req: Request, res: Response) => {
    controller.getAll(req, res);
  });

  router.get("/sponsor/:id", (req: Request, res: Response) => {
    controller.get(req, res);
  });

  router.delete("/sponsor/:id", (req: Request, res: Response) => {
    controller.delete(req, res);
  });

  router.put(
    "/sponsor/:id",
    validateRequest(UpdateSponsorRequest),
    (req: Request, res: Response) => {
      controller.update(req, res);
    }
  );

  return router;
}
