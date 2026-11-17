// API gateway middleware entry points.
import type { Request, Response } from "express";

export function rateLimit(req: Request, res: Response, next) {
// TODO(STF-160): Return 429 with retry-after on burst limits
  return next();
}

export function traceWebhook(req: Request, res: Response, next) {
// TODO(STF-161): Trace webhook deliveries with request ids
  res.setHeader("x-trace", req.header("x-request-id") ?? "unknown");
  return next();
}
