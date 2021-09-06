import React, { FC, useContext } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { AppContext } from '../../../store/appContext';
import Button from '../../Button/Button';
import CategorySelect from '../../Category/CategorySelect';

interface QuestioProps {
	question: string;
}

const QuestionBox: FC<QuestioProps> = ({ question }) => {
	const { setModalAction } = useContext(AppContext);
	const { setPopoverAction, popover } = useContext(AppContext);

	return (
		<div className="intellect__question">
			{question}
			<div className="intellect__question__button-section">
				<Button
					type="button"
					aria-describedby={Boolean(popover.anchorEl) ? 'simple-popover' : undefined}
					variant="intellect__question__button-section__edit"
					handleClick={(event: any) =>
						setPopoverAction({
							anchorEl: event.currentTarget,
							content: <CategorySelect />,
							id: 'simple-popover',
						})
					}
				>
					<Edit style={{ fontSize: 30 }} />
				</Button>
				<Button
					type="button"
					variant="intellect__question__button-section__delete"
					handleClick={() =>
						setModalAction({
							modalOpen: true,
							title: `Do you really want to delete this question:`,
							description: `${question}?`,
							id: 0,
						})
					}
				>
					<DeleteOutline style={{ fontSize: 30 }} />
				</Button>
			</div>
		</div>
	);
};

export default QuestionBox;
