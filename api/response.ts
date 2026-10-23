import { Response } from 'express';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export function sendSuccess<T>(res: Response, data: T, message?: string, statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    data,
    message,
  } as ApiResponse<T>);
}

export function sendError(res: Response, error: string, statusCode = 400, data?: any) {
  return res.status(statusCode).json({
    success: false,
    error,
    data,
  } as ApiResponse);
}
