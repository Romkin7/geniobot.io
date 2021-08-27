import { NextFunction, Request, Response } from "express";
import jwt from 'express-jwt';

// A-ha! So this is where the AUTH_SHARED_SECRET from .env is used!
export const authorize = jwt({
    secret: process.env.AUTH_SHARED_SECRET as string,
    algorithms: ['HS256'],
});


export function isAccountActive(request: Request, response: Response, next: NextFunction) {
	if (request.user && request.user.account.isActive) {
        return next();
	} else {
        return response.status(400).json({message: 'You must have active account, in order to proceed.'});
    }
}
