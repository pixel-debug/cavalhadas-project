import { Request, Response, NextFunction } from "express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

export function validateRequest<T extends object>(
  dtoClass: new () => T
): (req: Request, res: Response, next: NextFunction) => void {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dto = plainToClass(dtoClass, req.body);
      const errors = await validate(dto);

      if (errors.length > 0) {
        const validationErrors = errors.map((error) => ({
          field: error.property,
          message: Object.values(error.constraints || {}).join(", "),
        }));
        return res.status(400).json({ errors: validationErrors });
      }

      req.body = dto;
      next();
    } catch (error) {
      console.error("Error in validation middleware:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}
