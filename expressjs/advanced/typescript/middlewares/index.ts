import type { Request, Response, NextFunction } from "express";

export const exampleMiddleware = (req: Request, res: Response, next: NextFunction) => {
    console.log("Example middleware");
    next();
};