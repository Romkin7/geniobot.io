import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Main/Sidebar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer';
import ModalContextProvider from './store/modal-context';

function App() {
	return (
		<ModalContextProvider>
			<Router>
				<Header />
				<Sidebar />
				<Main />
				<Footer />
			</Router>
		</ModalContextProvider>
	);
}

export default App;
