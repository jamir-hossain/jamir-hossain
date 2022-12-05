import { NextApiRequest, NextApiResponse } from "next";

const errorMiddleware = (err: any, req: NextApiRequest, res: NextApiResponse, next: any) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    path: req.url,
    stack: err.stack,
    message: err.message,
  });
};

export default errorMiddleware;
