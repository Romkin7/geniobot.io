import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from '../../Pages/Overview';
import Invoices from '../../Pages/Invoices';
import Messages from '../../Pages/Messages';
import Automation from '../../Pages/Automation';
import Intellect from '../../Pages/Intellect';
import Api from '../../Pages/Api';
import Settings from '../../Pages/Settings';
import Help from '../../Pages/Help';
import Administrator from '../../Pages/Administrator';
import SingleTopic from './Automation/SingleTopic';
import ShowInvoice from '../../Pages/ShowInvoice';

const Main: FC = () => {
	return (
		<main>
			<Switch>
				<Route path="/" exact component={Overview} />
				<Route path="/invoices" exact component={Invoices} />
				<Route path={'/invoices/:id'} component={ShowInvoice} />
				<Route path="/messages" component={Messages} />
				<Route path="/automation" exact component={Automation} />
				<Route path="/automation/:id" component={SingleTopic} />
				<Route path="/intellect" component={Intellect} />
				<Route path="/api-list" component={Api} />
				<Route path="/settings" component={Settings} />
				<Route path="/help" component={Help} />
				<Route path="/administrator" component={Administrator} />
			</Switch>
		</main>
	);
};

export default Main;
