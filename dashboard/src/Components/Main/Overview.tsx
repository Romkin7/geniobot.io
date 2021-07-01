import React, { FC } from 'react';
import ChartLine from '../Shared/ChartLine';

const Overview: FC = () => {
	return (
		<>
			<section id="interactions">
				<div className="overview-box">
					<h4>Monthly interactions</h4>
					<ChartLine />
				</div>
				<p>Interaction is one click/open</p>
			</section>
			<section id="numbers">
				<div className="overview-box">
					<h4>Artificial Intellect</h4>
					<span>0</span>
				</div>
				<div className="overview-box">
					<h4>API integrations list</h4>
					<span>0</span>
				</div>
				<div className="overview-box">
					<h4>Unpaid invoices</h4>
					<span>0</span>
				</div>
				<div className="overview-box">
					<h4>Unread messages</h4>
					<span>0</span>
				</div>
				<div className="overview-box">
					<h4>Described topics</h4>
					<span>0</span>
				</div>
				<div className="overview-box">
					<h4>Given Categories</h4>
					<span>0</span>
				</div>
			</section>
		</>
	);
};

export default Overview;
