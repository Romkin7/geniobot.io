import React, { FC } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import QuestionBox from '../Components/Main/Intellect/QuestionBox';

const Intellect: FC = () => {
	return (
		<div className="intellect">
			<p className="intellect__p">
				Artificial Intellect is a feature to remember questions that bot couldn't answer. It will remember them automatically. Also
				you can add them here manually or with right click from Messages section
			</p>
			<QuestionBox question="Where can i buy telephone card in FI?" />
			<div className="intellect__question">
				Where can i buy telephone card - just to show more q?
				<div className="intellect__question__button-section">
					<button className="intellect__question__button-section__edit">
						<Edit style={{ fontSize: 30 }} />
					</button>
					<button className="intellect__question__button-section__delete">
						<DeleteOutline style={{ fontSize: 30 }} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Intellect;
