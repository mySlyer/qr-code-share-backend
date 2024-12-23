import { Request, Response, NextFunction } from 'express';
export function headersMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  next();
}
