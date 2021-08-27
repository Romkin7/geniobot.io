import { ICategory, IQuestion } from '../@types';
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
