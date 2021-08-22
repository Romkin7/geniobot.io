import { createContext, useState } from 'react';
import React, { FC } from 'react';
import { resetModal } from '../utils';
import { IModal } from '../@types';

interface IAppContext {
	modal: IModal;
	setModalAction: (modal: IModal) => void;
}

export const AppContext = createContext<IAppContext>({
	modal: resetModal(),
	setModalAction: (modal: IModal) => {
		return;
	},
});

const AppContextProvider: FC = ({ children }) => {
	const [modal, setModal] = useState(resetModal());

	const setModalAction = (modal: IModal) => {
		setModal(modal);
	};

	const context = {
		modal,
		setModalAction,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
