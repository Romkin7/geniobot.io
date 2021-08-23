import { createContext, useState } from 'react';
import React, { FC } from 'react';
import { resetCategory, resetModal, resetPopover } from '../utils';
import { ICategory, IModal, IPopover } from '../@types';

interface IAppContext {
	modal: IModal;
	setModalAction: (modal: IModal) => void;
	categories: ICategory[];
	setCategoriesAction: (categories: ICategory[]) => void;
	popover: any;
	setPopoverAction: (popover: any) => void;
}

export const AppContext = createContext<IAppContext>({
	modal: resetModal(),
	setModalAction: (modal: IModal) => {
		return;
	},
	categories: [resetCategory()],
	setCategoriesAction: (categories: ICategory[]) => {
		return;
	},
	popover: resetPopover(),
	setPopoverAction: (popover: any) => {
		return;
	},
});

const AppContextProvider: FC = ({ children }) => {
	const [modal, setModal] = useState<IModal>(resetModal());
	const [categories, setCategories] = useState<ICategory[]>([resetCategory()]);
	const [popover, setPopover] = useState(resetPopover());

	const setModalAction = (modal: IModal) => {
		setModal(modal);
	};

	const setCategoriesAction = (categories: ICategory[]) => {
		setCategories(categories);
	};

	const setPopoverAction = (popover: IPopover) => {
		setPopover(popover);
	};

	const context = {
		modal,
		setModalAction,
		categories,
		setCategoriesAction,
		popover,
		setPopoverAction,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
