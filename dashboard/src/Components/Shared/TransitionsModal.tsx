import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding: '20vw',
	},
	paper: {
		backgroundColor: 'rgba(32, 29, 63, 1)',
		border: '1px solid #000',
		boxShadow: theme.shadows[5],
		padding: '5vw',
		borderRadius: '20px',
	},
}));

interface TransitionsModalProps {
	heading: string;
	yes: string;
	no: string;
	description: string;
	handleOpenModal: () => void;
	handleCloseModal: () => void;
}

const TransitionsModal: FC<TransitionsModalProps> = ({ heading, yes, no, description, handleOpenModal, handleCloseModal }) => {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	/* const handleOpenModal = () => {
		setOpen(true);
	};

	const handleCloseModal = () => {
		setOpen(false);
	}; */

	return (
		<Modal
			aria-labelledby="transition-modal-title"
			aria-describedby="transition-modal-description"
			className={classes.modal}
			open={open}
			onClose={() => handleCloseModal}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<div className={classes.paper}>
					<h2 id="transition-modal-title">{heading}</h2>
					<p id="transition-modal-description">{description}</p>
					<div className="mod-buttons">
						<button className="mod-buttons__button">{yes}</button>
						<button className="mod-buttons__button" onClick={() => handleCloseModal}>
							{no}
						</button>
					</div>
				</div>
			</Fade>
		</Modal>
	);
};

export default TransitionsModal;
