import React, { FC, useContext } from 'react';
import { Modal as MaterialModal, Backdrop, Fade } from '@material-ui/core';
import Button from '../Button/Button';
import { AppContext } from '../../store/appContext';

const Modal: FC = () => {
	const { modal, setModal } = useContext(AppContext);
	const { modalOpen, title, description } = modal;
	return (
		<MaterialModal
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
			className="modal"
			open={modalOpen}
			onClose={() => setModal(!modalOpen)}
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
						<Button type="submit" handleClick={yesButtonHandle} style="modal__paper__buttons__yes">
							Yes
						</Button>
						<Button type="button" style="button" handleClick={() => toggleModal(modalOpen, '')}>
							No
						</Button>
					</div>
				</div>
			</Fade>
		</MaterialModal>
	);
};

export default Modal;
