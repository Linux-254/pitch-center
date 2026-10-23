import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { sendError } from './response.ts';

export function globalErrorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  console.error('[API Error]:', err);

  if (err instanceof ZodError) {
    return sendError(res, 'Validation error', 422, err.errors);
  }

  const message = err?.message || 'Internal server error';
  const statusCode = typeof err?.statusCode === 'number' ? err.statusCode : 500;

  return sendError(res, message, statusCode);
}
