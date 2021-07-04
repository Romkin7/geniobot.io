import React, { FC } from 'react';
/* import { AddCircleOutline } from '@material-ui/icons';
import Categories from './Categories';
import Topics from './Topics'; */
import { BrowserRouter as Router } from 'react-router-dom';
import CatTop from './CatTop';

/* interface AutomationProps {
	category: string;
	catpath: () => string;
	topic: string;
	topicpath: () => string;
}
[]; */

const Automation: FC = () => {
	return (
		<>
			<section id="automation">
				<CatTop catname="Internet" topicid={1} topicname="How to connect to Telia" />
				{/* <section className="category-list">
					<h4>
						Categories <AddCircleOutline style={{ fontSize: 30 }} className="add-icon" />
					</h4>
					<Categories catname="Internet" />
				</section>
				<section className="topics-list">
					<Switch>
						<Route path="/automation">
							<Topics id={1} topicname="How to connect Telia" />
						</Route>
					</Switch>
				</section> */}
			</section>
		</>
	);
};

export default Automation;
