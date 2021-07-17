import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './Overview';
import Invoices from './Invoices/Invoices';
import Messages from './Messages';
import Automation from './Automation/Automation';
import Intellect from './Intellect/Intellect';
import Api from './API/Api';
import Settings from './Settings';
import Help from './Help';
import Administrator from './Administrator';
import SingleTopic from './Automation/SingleTopic';
import ShowInvoice from './Invoices/ShowInvoice';

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
