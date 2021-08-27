import { IUserModel, IUser, ICompanyAccount, ICompanySettings, IInvoice, ICategory, Roles, IMessage } from "../../@types";

class User implements IUserModel {
	[x: string]: any;
	public username: string;
	public id: number;
	public account: ICompanyAccount;
	public settings: ICompanySettings;
	public invoices: IInvoice[];
	public automation: ICategory[];
	public email: string;
	public role: Roles;
	public messages: IMessage[];
	public password: string;
	public constructor(data: any) {
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
}

export default User;
