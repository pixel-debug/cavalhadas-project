import express, { Request, Response, NextFunction } from "express";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";

export const validateRequest = (dtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const dtoInstance = plainToClass(dtoClass, req.body);

      const errors = await validate(dtoInstance);
      if (errors.length > 0) {
        const validationErrors = errors.map((error) =>
          Object.values(error.constraints)
        );
        return res.status(400).json({ errors: validationErrors });
      }

      req.dto = dtoInstance;
      next();
    } catch (err) {
      console.error("Error validating request:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  };
};
