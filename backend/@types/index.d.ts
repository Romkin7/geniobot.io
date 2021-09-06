export type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';
export type Sizes = 'sm' | 'md' | 'lg';
export type TextColors = 'black' | 'white';
export type ButtonTypes = 'submit' | 'button' | 'reset';
export type InputTypes = 'text' | 'password' | 'email' | 'tel' | 'checkbox' | 'radio';
export type TargetTypes = '_blank' | '_self' | '_parent' | '_top';
export type IconNames = 'close';
/** User and account */
export interface IPlanType {
	src?: string;
	alt?: string;
	icon?: string;
	type?: PlanType;
}
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
	invoiceNumber: number;
	paid: boolean;
	createdAt: string;
	paymentDate: string;
	dueDate: string;
	sum: number;
	id: number;
}
export interface IFullInvoice extends IInvoice {
	status: Statuses;
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
export interface ITopic {
	categories: string[];
	topic: string;
	description?: string;
	id: number;
}
export interface IAutomation {
	categories: ICategory[];
	topics: ITopic[];
}
/** Datavbase connection */
export interface IConnectionSettings {
	user: string;
	password: string;
	port: number;
	host: string;
	database: string;
}