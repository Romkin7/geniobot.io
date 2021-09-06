import React, { FC, useContext } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { AppContext } from '../../../store/appContext';
import Button from '../../Button/Button';
import CategorySelect from '../../Category/CategorySelect';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';

interface QuestioProps {
	question: string;
}

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
}));

const QuestionBox: FC<QuestioProps> = ({ question }) => {
	const { setModalAction } = useContext(AppContext);

	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div className="intellect__question">
			{question}
			<div className="intellect__question__button-section">
				<Button type="button" aria-describedby={id} variant="intellect__question__button-section__edit" handleClick={handleClick}>
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
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
			>
				<Typography className={classes.typography}>
					<CategorySelect />
				</Typography>
			</Popover>
		</div>
	);
};

export default QuestionBox;
