import { createContext, useState } from 'react';
import React, { FC } from 'react';
import { resetCategory, resetModal } from '../utils';
import { ICategory, IModal } from '../@types';

interface IAppContext {
	modal: IModal;
	setModalAction: (modal: IModal) => void;
	categories: ICategory[];
	setCategoriesAction: (categories: ICategory[]) => void;
}

export const AppContext = createContext<IAppContext>({
	modal: resetModal(),
	setModalAction: (modal: IModal) => {
		return;
	},
	categories: [resetCategory()],
	setCategoriesAction: (categories: ICategory[]) => {
		return;
	}
});

const AppContextProvider: FC = ({ children }) => {
	const [modal, setModal] = useState<IModal>(resetModal());
	const [categories, setCategories] = useState<ICategory[]>([resetCategory()])

	const setModalAction = (modal: IModal) => {
		setModal(modal);
	};

	const setCategoriesAction = (categories: ICategory[]) => {
		setCategories(categories);
	}

	const context = {
		modal,
		setModalAction,
		categories,
		setCategoriesAction
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
