import { errorMessages } from "./errorMessages";
import passport from 'passport';
import {Strategy} from 'passport-local';
import {createPoolConnection} from './databaseConnection';

const { wrongUsernameOrPassword } = errorMessages;
export const setUpPassport = () => {
passport.use(
	new Strategy({ usernameField: 'email' }, async (email: string, password: string, done: any) => {
		try {
            // Tries to find the user matching the given username
            const pool = await createPoolConnection();
			const user = await pool.query('SELECT * FROM users WHERE email equals ' + email);
			if (!user) {
				return done(wrongUsernameOrPassword, null);
				// Check if the password is valid
			} else if (user && user.comparePasswords(password)) {
				return done(null, user);
			} else {
				// Throws an error if credentials are not valid
				return done(wrongUsernameOrPassword, null);
			}
		} catch (error) {
			return done(error);
		}
	}),
);
}
