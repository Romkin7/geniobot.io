import { createContext, useState } from 'react';
import React, { FC } from 'react';
import { resetModal } from '../utils';
import { IModal } from '../@types';

interface AppContext {
	modal: IModal;
	setModal: any;
}

export const AppContext = createContext<AppContext>({
	modal: resetModal(), setModal: resetModal()
});

const AppContextProvider: FC = ({ children }) => {
	const [modal, setModal] = useState(resetModal());

	const context = {
		modal,
		setModal,
	};

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
