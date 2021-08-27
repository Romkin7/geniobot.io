import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Main/Sidebar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading/Loading';
import AppContextProvider from './store/appContext';
import Modal from './Components/Modal/Modal';

function App() {
	return (
		<AppContextProvider>
			<Router>
				<Header />
				<Sidebar />
				<Main />
				<Modal />
				<Footer />
				<Loading />
			</Router>
		</AppContextProvider>
	);
}

export default App;
