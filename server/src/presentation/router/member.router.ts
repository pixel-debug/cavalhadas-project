import express, { Request, Response } from "express";
import { validateRequest } from "../../utils/middlewere/desiralise";
import { MemberController } from "../../controllers/memberController";
import { CreateMemberRequest } from "../../domain/entities/member/dto/request/CreateMemberRequest";
import { UpdateMemberRequest } from "../../domain/entities/member/dto/request/UpdateMemberRequest.dto";
import { Authentication } from "../../utils/middlewere/authentication";

const router = express.Router();
export default function memberRouter(controller: MemberController) {
  router.post(
    "/",
    Authentication,
    validateRequest(CreateMemberRequest),
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

  router.delete("/:id", Authentication, (req: Request, res: Response) => {
    controller.delete(req, res);
  });

  router.put(
    "/:id",
    Authentication,
    validateRequest(UpdateMemberRequest),
    (req: Request, res: Response) => {
      controller.update(req, res);
    }
  );

  return router;
}
