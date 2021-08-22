import React, { FC, useContext } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { AppContext } from '../../../store/appContext';

interface QuestioProps {
	question: string;
}

const QuestionBox: FC<QuestioProps> = ({ question }) => {
	const { setModalAction } = useContext(AppContext);

	
	/*category names*/
	const names = ['Internet', 'Telephone', 'Business', 'Private'];
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	return (
		<div className="intellect__question">
			{question}
			<div className="intellect__question__button-section">
				<button
					className="intellect__question__button-section__edit"
					onClick={() =>
						setModalAction({ modalOpen: true, title: `Choose category where you want to move this question:`, description: '', id: 0 })
					}
				>
					<Edit style={{ fontSize: 30 }} />
				</button>
				<button
					className="intellect__question__button-section__delete"
					onClick={() =>
						setModalAction({
							modalOpen: true,
							title: `Do you really want to delete this question:`,
							description: `${question}?`,
							id: 0
						})
					}
				>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>
		</div>
	);
};

export default QuestionBox;
