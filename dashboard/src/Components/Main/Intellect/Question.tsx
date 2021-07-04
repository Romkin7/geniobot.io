import React, { FC } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import Modal from '../../Shared/Modal';

interface QuestioProps {
	question: string;
}

const Question: FC<QuestioProps> = ({ question }) => {
	const handledeletechange = () => {
		console.log('delete clicked');
		return <Modal />;
	};

	return (
		<div className="question">
			{question}
			<div className="button-section">
				<button className="edit-button">
					<Edit style={{ fontSize: 30 }} />
				</button>
				<button className="delete-button" onClick={handledeletechange}>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>
		</div>
	);
};

export default Question;
