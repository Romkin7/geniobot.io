import React, { FC } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import QuestionBox from '../../Components/Main/Intellect/QuestionBox';
import Button from '../../Components/Button/Button';

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
					<Button type="button" variant="intellect__question__button-section__edit" handleClick={() => {}}>
						<Edit style={{ fontSize: 30 }} />
					</Button>
					<Button type="button" variant="intellect__question__button-section__delete" handleClick={() => {}}>
						<DeleteOutline style={{ fontSize: 30 }} />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Intellect;
