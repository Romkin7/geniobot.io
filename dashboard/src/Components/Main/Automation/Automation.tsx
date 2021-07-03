import React, { FC } from 'react';
import { AddCircleOutline } from '@material-ui/icons';
import Categories from './Categories';
import Topics from './Topics';
import { Switch } from 'react-router-dom';

/* interface AutomationProps {
	category: string;
	catpath: () => string;
	topic: string;
	topicpath: () => string;
}
[]; */

const Automation: FC = () => {
	return (
		<section id="automation">
			<section className="category-list">
				<h4>
					Categories <AddCircleOutline style={{ fontSize: 30 }} className="add-icon" />
				</h4>
				<Categories catname="Internet" />
			</section>
			<section className="topics-list">
				<Switch>
					<Topics id={1} topicname="How to connect Telia" />
				</Switch>
			</section>
		</section>
	);
};

export default Automation;
