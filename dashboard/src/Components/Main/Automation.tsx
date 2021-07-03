import React, { FC } from 'react';
import { AddCircleOutline, Edit, DeleteOutline, FiberManualRecord } from '@material-ui/icons';

const Automation: FC = () => {
	return (
		<section id="automation">
			<section className="category-list">
				<h4>
					Categories <AddCircleOutline style={{ fontSize: 30 }} className="add-icon" />
				</h4>
				<div className="single-category">
					Internet
					<div className="button-section">
						<button className="edit-button">
							<Edit style={{ fontSize: 25 }} />
						</button>
						<button className="delete-button">
							<DeleteOutline style={{ fontSize: 25 }} />
						</button>
					</div>
				</div>
				<div className="single-category">
					Telephone
					<button className="edit-button">
						<Edit style={{ fontSize: 25 }} />
					</button>
					<button className="delete-button">
						<DeleteOutline style={{ fontSize: 25 }} />
					</button>
				</div>
				<div className="single-category">
					Business
					<button className="edit-button">
						<Edit style={{ fontSize: 25 }} />
					</button>
					<button className="delete-button">
						<DeleteOutline style={{ fontSize: 25 }} />
					</button>
				</div>
				<div className="single-category">
					Private
					<button className="edit-button">
						<Edit style={{ fontSize: 25 }} />
					</button>
					<button className="delete-button">
						<DeleteOutline style={{ fontSize: 25 }} />
					</button>
				</div>
			</section>
			<section className="topics-list">
				<ul>
					<li>
						<FiberManualRecord className="topics-icon" /> How to connect Telia
					</li>
					<li>
						<FiberManualRecord className="topics-icon" /> How to connect Telia
					</li>
					<li>
						<FiberManualRecord className="topics-icon" /> How to connect Telia
					</li>
					<li>
						<FiberManualRecord className="topics-icon" /> How to connect Telia
					</li>
					<li>
						<FiberManualRecord className="topics-icon" /> How to connect Telia
					</li>
				</ul>
			</section>
		</section>
	);
};

export default Automation;
