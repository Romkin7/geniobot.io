import React, { FC } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import Question from '../Components/Main/Intellect/QuestionBox';

const Intellect: FC = () => {
	return (
		<section id="intellect">
			<p>
				Artificial Intellect is a feature to remember questions that bot couldn't answer. It will remember them automatically. Also
				you can add them here manually or with right click from Messages section
			</p>
			<Question question="Where can i buy telephone card in FI?" />
			<div className="question">
				Where can i buy telephone card - just to show more q?
				<div className="button-section">
					<button className="edit-button">
						<Edit style={{ fontSize: 30 }} />
					</button>
					<button className="delete-button">
						<DeleteOutline style={{ fontSize: 30 }} />
					</button>
				</div>
			</div>
		</section>
	);
};

export default Intellect;
