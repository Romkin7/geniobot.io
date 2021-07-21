import React, { FC } from 'react';
import ChartLine from '../Components/Shared/ChartLine';

const Overview: FC = () => {
	return (
		<>
			<section className="overview-box">
				<h2 className="overview-box__heading">Monthly interactions</h2>
				<ChartLine />
			</section>
			<p>Interaction is one click/open</p>
			<div className="numbers">
				<div className="numbers__overview-box">
					<h3 className="numbers__overview-box__heading">Artificial Intellect</h3>
					<span className="numbers__overview-box__span">0</span>
				</div>
				<div className="numbers__overview-box">
					<h3 className="numbers__overview-box__heading">API integrations list</h3>
					<span className="numbers__overview-box__span">0</span>
				</div>
				<div className="numbers__overview-box">
					<h3 className="numbers__overview-box__heading">Unpaid invoices</h3>
					<span className="numbers__overview-box__span">0</span>
				</div>
				<div className="numbers__overview-box">
					<h3 className="numbers__overview-box__heading">Unread messages</h3>
					<span className="numbers__overview-box__span">0</span>
				</div>
				<div className="numbers__overview-box">
					<h3 className="numbers__overview-box__heading">Described topics</h3>
					<span className="numbers__overview-box__span">0</span>
				</div>
				<div className="numbers__overview-box">
					<h3 className="numbers__overview-box__heading">Given Categories</h3>
					<span className="numbers__overview-box__span">0</span>
				</div>
			</div>
		</>
	);
};

export default Overview;
