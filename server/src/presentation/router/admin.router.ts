import express, { Request, Response } from "express";
import { validateRequest } from "../../utils/middlewere/desiralise";
import { AdminController } from "../../controllers/adminController";
import { CreateAdminRequest } from "../../domain/entities/admin/dto/request/CreateAdminRequest.dto";
import { UpdateAdminRequest } from "../../domain/entities/admin/dto/request/UpdateAdminRequest.dto";

const router = express.Router();
export default function adminRouter(controller: AdminController) {
  router.post(
    "admin",
    validateRequest(CreateAdminRequest),
    (req: Request, res: Response) => {
      controller.create(req, res);
    }
  );

  router.put(
    "admin/:id",
    validateRequest(UpdateAdminRequest),
    (req: Request, res: Response) => {
      controller.update(req, res);
    }
  );

  router.get("admin", (req: Request, res: Response) => {
    controller.getAll(req, res);
  });

  router.get("admin/:id", (req: Request, res: Response) => {
    controller.get(req, res);
  });

  router.delete("admin/:id", (req: Request, res: Response) => {
    controller.delete(req, res);
  });
}
