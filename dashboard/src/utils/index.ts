import {
	ICategory,
	ICompanyAccount,
	ICompanySettings,
	IInvoice,
	ILoggedInUser,
	ILogo,
	IMessage,
	INotification,
	INotificationResource,
	IQuestion,
	IUser,
} from '../@types';
import { ILoading, IModal } from '../store/appContext';

export function resetModal(): IModal {
	return {
		modalOpen: false,
		title: '',
		description: '',
		id: 0,
	};
}

export function resetLoading(): ILoading {
	return {
		text: '',
		visible: false,
	};
}

export function resetCategory(): ICategory {
	return {
		id: 0,
		name: '',
		questions: [resetQuestion()],
	};
}

export function resetQuestion(): IQuestion {
	return {
		question: '',
		id: 0,
		answer: '',
	};
}

export function resetLoggedInUser(): ILoggedInUser {
	return {
		user: resetUser(),
		isAuthenticated: false,
	};
}

export function resetUser(): IUser {
	return {
		username: '',
		email: '',
		id: 0,
		account: resetCompanyAccount(),
		settings: resetCompanySettings(),
		invoices: [resetInvoice()],
		messages: [resetMessage()],
		automation: [resetCategory()],
		role: 'basic',
	};
}

export function resetCompanyAccount(): ICompanyAccount {
	return {
		active: false,
		plan: 'free',
	};
}

export function resetCompanySettings(): ICompanySettings {
	return {
		primaryColor: '',
		companyName: '',
		displayName: '',
		logo: resetLogo(),
		defaultLanguage: 'Finnish',
		notifications: [resetNotification()],
	};
}

export function resetInvoice(): IInvoice {
	return {
		invoiceNumber: '',
		paid: false,
		createdAt: '',
		paymentDate: '',
		dueDate: '',
		sum: 0,
		id: 0,
	};
}

export function resetMessage(): IMessage {
	return {
		text: '',
		uname: '',
	};
}

export function resetLogo(): ILogo {
	return {
		src: '',
		alt: '',
	};
}

export function resetNotification(): INotification {
	return {
		sms: resetNotificationResource(),
		email: resetNotificationResource(),
		push: resetNotificationResource(),
		whenMentioned: resetNotificationResource(),
	};
}

export function resetNotificationResource(): INotificationResource {
	return {
		value: '',
		active: false,
		label: '',
	};
}
