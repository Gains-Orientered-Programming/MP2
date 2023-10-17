import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

const customerComplaintController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.send("Dear HR, suck these balls");
};

export default { customerComplaintController };
