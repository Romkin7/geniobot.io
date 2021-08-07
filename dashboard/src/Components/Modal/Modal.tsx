import React, { FC, useContext } from 'react';
import { Modal as MaterialModal, Backdrop, Fade } from '@material-ui/core';
import Button from '../Button/Button';
import { ModalContext } from '../../store/modal-context';

interface IModalProps {
	title: string;
	description?: string;
	yesButtonHandle: () => void;
}

const Modal: FC<IModalProps> = ({ title, description, yesButtonHandle }) => {
	const { modalOpen, toggleModal } = useContext(ModalContext);
	return (
		<MaterialModal
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
			className="modal"
			open={modalOpen}
			onClose={() => toggleModal(modalOpen)}
			closeAfterTransition
			BackdropComponent={Backdrop}
			BackdropProps={{
				timeout: 500,
			}}
		>
			<Fade in={modalOpen}>
				<div className="modal__paper">
					<h2 className="modal__paper__title">{title}</h2>
					{description && <p className="modal__paper__description">{description}</p>}
					<div className="modal__paper__buttons">
						<Button type="submit" handleClick={yesButtonHandle}>
							Yes
						</Button>
						<Button type="button" handleClick={() => toggleModal(modalOpen)}>
							No
						</Button>
					</div>
				</div>
			</Fade>
		</MaterialModal>
	);
};

export default Modal;
