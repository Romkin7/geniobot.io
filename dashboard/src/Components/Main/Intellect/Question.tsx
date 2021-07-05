import React, { FC } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

interface QuestioProps {
	question: string;
}

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '20vw',
	},
	paper: {
		backgroundColor: 'rgba(233, 48, 255, 1)',
		border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: '5vw',
		borderRadius: '20px',
	},
}));

const Question: FC<QuestioProps> = ({ question }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handledeletechange = () => {
		console.log('delete clicked');
		/* alert('Do you really want to delete this question?'); */
	};

	return (
		<div className="question">
			{question}
			<div className="button-section">
				<button className="edit-button">
					<Edit style={{ fontSize: 30 }} />
				</button>
				<button className="delete-button" onClick={handleOpen}>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={open}>
					<div className={classes.paper}>
						<h4 id="transition-modal-title">Do you really want to delete this question: </h4>
						<p id="transition-modal-description">{question}?</p>
						<div className="mod-buttons">
							<button className="modal-button">Yes</button>
							<button className="modal-button" onClick={handleClose}>
								No
							</button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default Question;
