import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../../Pages/Overview/Overview';
import Invoices from '../../Pages/Invoices/Invoices';
import Messages from '../../Pages/Messages/Messages';
import Automation from '../../Pages/Automation/Automation';
import Intellect from '../../Pages/Intellect/Intellect';
import Api from '../../Pages/API/Api';
import Settings from '../../Pages/Settings/Settings';
import Help from '../../Pages/Help/Help';
import Administrator from '../../Pages/Administrator/Administrator';
import SingleTopic from './Automation/SingleTopic';
import ShowInvoice from '../../Pages/Invoices/ShowInvoice';
import LoggedInRoute from './LoggedInRoute';
import LoggedOutRoute from './LoggedOutRoute';
import LoginPage from '../../Pages/LoginPage/LoginPage';

const Main: FC = () => {
	return (
		<main>
			<Switch>
				<LoggedOutRoute path="/login" Component={LoginPage} />
				<LoggedInRoute path="/" exact Component={Overview} />
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
			</Switch>
		</main>
	);
};

export default Main;
