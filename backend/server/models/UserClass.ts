import { IUserModel, IUser } from "../../../@types";
import {createPoolConnection} from '../conf/databaseConnection';

class User implements IUserModel {
	protected username: string;
	protected email: string;
	protected password: string;
	private constructor(data: IUser) {
		this.username = data.username || undefined;
		this.email = data.email || undefined;
		this.password = data.password || undefined;
	}
	public filterUser() {
		for (const key in this) {
			if (this[key] === undefined) {
				delete this[key];
			}
		}
		return this;
	}
	public validateUser(data: IUser) {
		return Object.keys(data).length === Object.keys(this).length;
    }
    public async loginUser(email: string, password: string) {
        const pool = await createPoolConnection();
        const user = await pool.query('SELECT * FROM users WHERE email EQUALS ' + email);
    }
    public getUser() {
        return {
            username: this.username,
            email: this.email,
            password: this.password
        }
    }
    public setUser(user: IUser) {

    }
}

export default User;
