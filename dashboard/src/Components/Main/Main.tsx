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
