export type HeadingVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | 'xxlg';
export type Sizes = 'sm' | 'md' | 'lg';
export type TextColors = 'black' | 'white';
export type ButtonTypes = 'submit' | 'button' | 'reset';
export type InputTypes = 'text' | 'password' | 'email' | 'tel' | 'checkbox' | 'radio';
export type TargetTypes = '_blank' | '_self' | '_parent' | '_top';
export type IconNames = 'close';
export interface IConnectionSettings {
	user: string;
	password: string;
	port: number;
	host: string;
	database: string;
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

export interface IModal {
	title: string;
	description: string;
	modalOpen: boolean;
	id: number;
}
/** Company Settings types */
interface ILogo {
	src: string;
	alt: string;
}

export interface PlanType {
	src?: string;
	alt?: string;
	icon?: string;
	type?: 'free' | 'pro';
}
type Statuses = 'Paid' | 'Open invoice';
/* type PlanType = 'free' | 'pro'; */
type Languages = 'Finnish' | 'English' | 'Swedish' | 'Russian' | 'Ukrainean';
type Roles = 'basic' | 'admin';

export interface Invoice {
	number: number;
	paid: boolean;
	createdAt: string;
	paymentDate: string;
	dueDate: string;
	sum: number;
	id: number;
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
/** Company settings types */
export interface ICompanySettings {
	primaryColor: string;
	companyName: string;
	displayName: string;
	logo: ILogo;
	plan: PlanType;
	defaultLanguage: Languages;
	notifications: INotification[];
}
interface IUData {
	uname: string;
	uemail: string;
	uwebsite: string;
	phonenumber: string;
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
export interface ICompanyAccount {
	active: boolean;
	type: AccountTypes;
}
export interface IUser {
	id: number;
	account: ICompanyAccount;
	settings: ICompanySettings;
	invoices: IInvoice[];
	messages: IMessage[];
	password: string;
	automation: ICategory[];
	udata: IUData;
	role: Roles;
}
