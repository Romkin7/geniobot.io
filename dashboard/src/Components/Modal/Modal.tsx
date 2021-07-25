import React, { FC } from 'react';
import { Modal as MaterialModal, Backdrop, Fade } from '@material-ui/core';
import Button from '../Button/Button';

interface IModalProps {
	title: string;
	description?: string;
	open: boolean;
	handleCloseModal: () => void;
	yesButtonHandle: () => void;
}

const Modal: FC<IModalProps> = ({ title, description, open, handleCloseModal, yesButtonHandle }) => {
	return (
		<MaterialModal
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
			className="modal"
			open={open}
			onClose={() => handleCloseModal()}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={open}>
				<div className="modal__paper">
					<h2 className="modal__paper__title">{title}</h2>
					{description && (<p className="modal__paper__description">{description}</p>)}
					<div className="modal__paper__buttons">
						<Button type="submit" handleClick={yesButtonHandle}>
							Yes
						</Button>
						<Button type="button" handleClick={handleCloseModal}>
							No
						</Button>
					</div>
				</div>
			</Fade>
		</MaterialModal>
	);
};

export default Modal;
