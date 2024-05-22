import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const Authentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).send({ mensagem: "Falha na autenticação" });
    }
    const token = authHeader.split(" ")[1];
    const decode = jwt.verify(token, process.env.JWT_SECRET as string);
    console.log(decode);
    req.user = decode;
    next();
  } catch (error) {
    return res.status(401).send({ mensagem: "Falha na autenticação" });
  }
};
