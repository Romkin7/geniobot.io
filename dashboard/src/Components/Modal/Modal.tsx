import React, { FC, FormEvent, useContext } from 'react';
import { Modal as MaterialModal, Backdrop, Fade } from '@material-ui/core';
import Button from '../Button/Button';
import { AppContext } from '../../store/appContext';
import { resetModal } from '../../utils';

const Modal: FC = () => {
	const { modal, setModalAction } = useContext(AppContext);
	const { modalOpen, title, description, id } = modal;
	console.log(id, title, description, modalOpen);
	const handleSubmit = (event: FormEvent, id: number) => {
		event.preventDefault();
		console.log(id);
	}
	return (
		<MaterialModal
			aria-labelledby="modal-title"
			aria-describedby="modal-description"
			className="modal"
			open={modalOpen}
			onClose={() => setModalAction(resetModal())}
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
						<Button
							type="submit"
							variant="modal__paper__buttons__yes"
							handleClick={(event: FormEvent) => handleSubmit(event, id)}
						>
							Yes
						</Button>
						<Button type="button" variant="button" handleClick={() => setModalAction(resetModal())}>
							No
						</Button>
					</div>
				</div>
			</Fade>
		</MaterialModal>
	);
};

export default Modal;
