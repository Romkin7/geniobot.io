import { createContext, useState } from 'react';
import React, { FC } from 'react';
import { resetCategory, resetLoading, resetModal, resetUser } from '../utils';
import { ICategory, IUser } from '../@types';

export interface IModal {
	title: string;
	description: string;
	modalOpen: boolean;
	id: number;
}

export interface ILoading {
	visible: boolean;
	text: string;
}

interface IAppContext {
	modal: IModal;
	setModalAction: (modal: IModal) => void;
	loading: ILoading;
	setLoadingAction: (loading: ILoading) => void;
	categories: ICategory[];
	setCategoriesAction: (categories: ICategory[]) => void;
	user: IUser;
	setUserAction: (user: IUser) => void;
}

export const AppContext = createContext<IAppContext>({
	modal: resetModal(),
	setModalAction: (modal: IModal) => {
		return;
	},
	loading: resetLoading(),
	setLoadingAction: (loading: ILoading) => {
		return;
	},
	categories: [resetCategory()],
	setCategoriesAction: (categories: ICategory[]) => {
		return;
	},
	user: resetUser(),
	setUserAction: (user: IUser) => {
		return;
	},
});

const AppContextProvider: FC = ({ children }) => {
	const [modal, setModal] = useState<IModal>(() => resetModal());
	const [loading, setLoading] = useState<ILoading>(() => resetLoading());
	const [categories, setCategories] = useState<ICategory[]>(() => [resetCategory()]);
	const [user, setUser] = useState<IUser>(() => resetUser());

	const setModalAction = (modal: IModal) => {
		setModal(() => modal);
	};

	const setLoadingAction = (loading: ILoading) => {
		setLoading(() => loading);
	};

	const setCategoriesAction = (categories: ICategory[]) => {
		setCategories(() => categories);
	};

	const setUserAction = (user: IUser) => {
		setUser(() => user);
	};

	const context = {
		modal,
		setModalAction,
		loading,
		setLoadingAction,
		categories,
		setCategoriesAction,
		user,
		setUserAction,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
