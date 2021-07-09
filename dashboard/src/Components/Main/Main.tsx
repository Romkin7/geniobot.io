import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './Overview';
import Invoices from './Invoices';
import Messages from './Messages';
import Automation from './Automation/Automation';
import Intellect from './Intellect/Intellect';
import Api from './API/Api';
import Settings from './Settings';
import Help from './Help';
import Administrator from './Administrator';
import SingleTopic from './Automation/SingleTopic';

const Main: FC = () => {
	return (
		<main>
			<Switch>
				<Route path="/" exact>
					<Overview />
				</Route>
				<Route path="/invoices">
					<Invoices />
				</Route>
				<Route path="/messages">
					<Messages />
				</Route>
				<Route path="/automation">
					<Automation />
				</Route>
				<Route path="/intellect">
					<Intellect />
				</Route>
				<Route path="/api-list">
					<Api />
				</Route>
				<Route path="/settings">
					<Settings />
				</Route>
				<Route path="/help">
					<Help />
				</Route>
				<Route path="/administrator">
					<Administrator />
				</Route>
				<Route path="/aotomation/:id">
					<SingleTopic />
				</Route>
			</Switch>
		</main>
	);
};

export default Main;
