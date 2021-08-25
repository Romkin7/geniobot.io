import { Router, Request, Response, NextFunction } from 'express';
import User from '../models/UserClass';
import { authorize, isAccountActive } from '../middleware/authObject';

const router = Router();

router.get('/', authorize, isAccountActive, async (request: Request, response: Response, next: NextFunction) => {
	try {
		const user = new User(request.user);
		user.getUser();
	} catch (error) {
		return next(error);
	}
});

export default router;
