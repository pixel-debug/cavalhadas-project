import express, { Request, Response } from "express";
import { MemberController } from "../../controllers/memberController";
import { validateRequest } from "../../utils/middlewere/desiralise";
import { CreateMemberRequest } from "../../domain/entities/member/dto/request/createMemberRequest";
import { UpdateMemberRequest } from "../../domain/entities/member/dto/request/UpdateMemberRequest.dto";

const router = express.Router();
export default function memberRouter(controller: MemberController) {
  router.post(
    "members",
    validateRequest(CreateMemberRequest),
    (req: Request, res: Response) => {
      controller.create(req, res);
    }
  );

  router.put(
    "members/:id",
    validateRequest(UpdateMemberRequest),
    (req: Request, res: Response) => {
      controller.update(req, res);
    }
  );

  router.get("members", (req: Request, res: Response) => {
    controller.getAll(req, res);
  });

  router.get("members/:id", (req: Request, res: Response) => {
    controller.get(req, res);
  });

  router.get("members/:filter", (req: Request, res: Response) => {
    controller.getByFilter(req, res);
  });

  router.delete("members/:id", (req: Request, res: Response) => {
    controller.delete(req, res);
  });
}
