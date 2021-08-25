import tagnames from './tagnames';
/** User and account */
type PlanType = 'free' | 'pro';
type Statuses = 'Paid' | 'Open invoice';
type Languages = 'Finnish' | 'English' | 'Swedish' | 'Russian' | 'Ukrainean';
type Roles = 'basic' | 'admin';
export interface IUserModel {
	username: string;
	email: string;
	password: string;
	id: number;
	account: ICompanyAccount;
	settings: ICompanySettings;
	invoices: IInvoice[];
	messages: IMessage[];
	automation: ICategory[];
	role: Roles;
}
export interface IMessage {
	text: string;
	uname: string;
}
export interface ISavedMessage extends IMessage {
	id: number;
	createdAt: Date;
	updatedAt: Date;
}

export interface IUser {
	username: string;
	email: string;
	id: number;
	account: ICompanyAccount;
	settings: ICompanySettings;
	invoices: IInvoice[];
	messages: IMessage[];
	automation: ICategory[];
    role: Roles;
    loginUser
}
interface ILogo {
	src: string;
	alt: string;
}

export interface ICompanyAccount {
	active: boolean;
    plan: PlanType;
}

export interface ICompanySettings {
	primaryColor: string;
	companyName: string;
	displayName: string;
	logo: ILogo;
	plan: PlanType;
	defaultLanguage: Languages;
	notifications: INotification[];
}
interface INotificationResource {
	value: string;
	active: boolean;
	label: string;
}

interface INotification {
	sms: INotificationResource;
	email: INotificationResource;
	push: INotificationResource;
	whenMentioned: INotificationResource;
}

export interface IInvoice {
	invoiceNumber: string;
	dueDate: Date;
	paymentDate: Date;
	sum: number;
}
export interface IFullInvoice extends IInvoice {
	status: Statuses;
	createdAt: Date;
	updatedAt: Date;
}
interface ILastInvoice {
	invoiceNumber: string;
}
export interface IInvoiceAdminView extends IFullInvoice {
	udata: IUData;
	purchaseDate: Date;
	lastInvoice: ILastInvoice;
}
interface INotificationResource {
	value: string;
	active: boolean;
	label: string;
}

interface INotification {
	sms: INotificationResource;
	email: INotificationResource;
	push: INotificationResource;
	whenMentioned: INotificationResource;
}
interface IQuestion {
	question: string;
	answer: string;
	id: number;
}
export interface ICategory {
	name: string;
	id: number;
	questions: IQuestion[];
}
interface IUData {
	uname: string;
	uemail: string;
	uwebsite: string;
	phonenumber: string;
}

/** Datavbase connection */
export interface IConnectionSettings {
	user: string;
	password: string;
	port: number;
	host: string;
	database: string;
}