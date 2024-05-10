import express, { Request, Response } from "express";
import { validateRequest } from "../../utils/middlewere/desiralise";
import { SponsorController } from "../../controllers/sponsorController";
import { CreateSponsorRequest } from "../../domain/entities/sponsor/dto/request/CreateSponsorRequest.dto";
import { UpdateSponsorRequest } from "../../domain/entities/sponsor/dto/request/UpdateSponsorRequest.dto";

const router = express.Router();
export default function sponsorRouter(controller: SponsorController) {
  router.post(
    "/",
    validateRequest(CreateSponsorRequest),
    (req: Request, res: Response) => {
      controller.create(req, res);
    }
  );

  router.get("/", (req: Request, res: Response) => {
    controller.getAll(req, res);
  });

  router.get("/:id", (req: Request, res: Response) => {
    controller.get(req, res);
  });

  router.delete("/:id", (req: Request, res: Response) => {
    controller.delete(req, res);
  });

  router.put(
    "/:id",
    validateRequest(UpdateSponsorRequest),
    (req: Request, res: Response) => {
      controller.update(req, res);
    }
  );

  return router;
}
