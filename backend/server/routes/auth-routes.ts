import {NextFunction, Request, Response, Router} from 'express';
import { createPoolConnection } from '../conf/databaseConnection';
import User from '../models/UserClass';
const router = Router();

router.post("/signup", async(request: Request, response: Response, next: NextFunction) => {
    try {
        const user = new User(request.body);
        const pool = createPoolConnection();
        const newUser = await pool.query('INSERT INTO users(username, email, password) values($1, $2, $3)', [user.username, user.email, user.password]);
        return response.status(201).json({user: newUser});
    } catch(error) {
        return next(error);
    }
})

export default router;
