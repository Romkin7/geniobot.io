import React, { FC } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';

const Intellect: FC = () => {
	return (
		<section id="intellect">
			<p>
				Artificial Intellect is a feature to remember questions that bot couldn't answer. It will remember them automatically. Also
				you can add them here manually or with right click from Messages section
			</p>
			<div className="question">
				Where can i buy telephone card?
				<Edit style={{ fontSize: 30 }} />
				<DeleteOutline style={{ fontSize: 30 }} />
			</div>
			<div className="question">
				Where can i buy telephone card?
				<Edit style={{ fontSize: 30 }} />
				<DeleteOutline style={{ fontSize: 30 }} />
			</div>
		</section>
	);
};

export default Intellect;
