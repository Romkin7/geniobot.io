import React, { useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Main/Sidebar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import AppContextProvider, { AppContext } from './store/appContext';
import Modal from './Components/Modal/Modal';

function App() {
	const { modal } = useContext(AppContext);
	console.log(modal);
	return (
		<AppContextProvider>
			<Router>
				<Header />
				<Sidebar />
				<Main />
				{modal.modalOpen && <Modal title={modal.title} yesButtonHandle={() => {}} />}
				<Footer />
			</Router>
		</AppContextProvider>
	);
}

export default App;
