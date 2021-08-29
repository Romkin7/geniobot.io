import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Sidebar from './Components/Main/Sidebar';
import LoggedInRoute from './Components/Auth/LoggedInRoute';
import LoggedOutRoute from './Components/Auth/LoggedOutRoute';
import Footer from './Components/Footer/Footer';
import Loading from './Components/Loading/Loading';
import LoginPage from './Pages/LoginPage/LoginPage';
import AppContextProvider from './store/appContext';
import Modal from './Components/Modal/Modal';
import Overview from './Pages/Overview/Overview';
import Invoices from './Pages/Invoices/Invoices';
import ShowInvoice from './Pages/Invoices/ShowInvoice';
import Automation from './Pages/Automation/Automation';
import Intellect from './Pages/Intellect/Intellect';
import Api from './Pages/API/Api';
import { Help, Settings } from '@material-ui/icons';
import Administrator from './Pages/Administrator/Administrator';
import SingleTopic from './Components/Main/Automation/SingleTopic';
import Messages from './Pages/Messages/Messages';
import LandingPage from './Pages/LandingPage/LandingPage';

const App: FC = () => {
	return (
		<AppContextProvider>
			<Router>
				<Header />
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<LoggedOutRoute path="/login" Component={LoginPage} />
					<Sidebar />
					<main>
						<LoggedInRoute path="/overview" exact Component={Overview} />
						<LoggedInRoute path="/invoices" exact Component={Invoices} />
						<LoggedInRoute path={'/invoices/:id'} Component={ShowInvoice} />
						<LoggedInRoute path="/messages" Component={Messages} />
						<LoggedInRoute path="/automation" exact Component={Automation} />
						<LoggedInRoute path="/automation/:id" Component={SingleTopic} />
						<LoggedInRoute path="/intellect" Component={Intellect} />
						<LoggedInRoute path="/api-list" Component={Api} />
						<LoggedInRoute path="/settings" Component={Settings} />
						<LoggedInRoute path="/help" Component={Help} />
						<LoggedInRoute path="/administrator" Component={Administrator} />
					</main>
				</Switch>
				<Modal />
				<Footer />
				<Loading />
			</Router>
		</AppContextProvider>
	);
};

export default App;
