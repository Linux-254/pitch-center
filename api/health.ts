import { Request, Response } from 'express';
import { sendSuccess } from './response.ts';

export default function healthHandler(_req: Request, res: Response) {
  return sendSuccess(res, {
    status: 'healthy',
    project: 'Pitch Center v2',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  }, 'Pitch Center API operational');
}
