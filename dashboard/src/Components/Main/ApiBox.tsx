import React, { FC } from 'react';
import { Edit, DeleteOutline, FiberManualRecord } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade } from '@material-ui/core';

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
	formControl: {
		margin: theme.spacing(1),
		minWidth: '100%',
		/* maxWidth: 300, */
	},
	chips: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	chip: {
		margin: 2,
	},
}));

interface ApiBoxProps {
	address: string;
	name: string;
	maincolor: string;
}

const ApiBox: FC<ApiBoxProps> = ({ address, name, maincolor }) => {
	const classes = useStyles();
	/*delete button*/
	const [opendelete, setOpenDelete] = React.useState(false);
	/*edit button*/
	const [openedit, setOpenEdit] = React.useState(false);
	/*open delete button*/
	const handleOpenDelete = () => {
		setOpenDelete(true);
	};
	/*open edit button*/
	const handleOpenEdit = () => {
		setOpenEdit(true);
	};
	/*close delete button*/
	const handleCloseDelete = () => {
		setOpenDelete(false);
	};
	/*close edit button*/
	const handleCloseEdit = () => {
		setOpenEdit(false);
	};
	return (
		<div className="api-list__single-api">
			<div className="api-list__single-api__section-buttons">
				<button className="api-list__single-api__section-buttons__button" onClick={handleOpenEdit}>
					<Edit style={{ fontSize: 30 }} />
				</button>
				<button className="api-list__single-api__section-buttons__button" onClick={handleOpenDelete}>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>

			<ul className="api-list__single-api__list">
				<span className={`api-list__single-api__address ${maincolor}`}>{address}</span>
				<li className="api-list__single-api__list__item">
					<FiberManualRecord className={`api-list__single-api__address__icon ${maincolor}  `} style={{ fontSize: 20 }} />
					{name}
				</li>
				<li className="api-list__single-api__list__item">
					<FiberManualRecord className={`api-list__single-api__address__icon ${maincolor}  `} style={{ fontSize: 20 }} />
					agreement number
				</li>
				<li className="api-list__single-api__list__item">
					<FiberManualRecord className={`api-list__single-api__address__icon ${maincolor}  `} style={{ fontSize: 20 }} />
					unpaid invoices
				</li>
			</ul>
			{/*  delete button modal */}
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={opendelete}
				onClose={handleCloseDelete}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={opendelete}>
					<div className={classes.paper}>
						<h4 id="transition-modal-title">Do you really want to delete this API: </h4>
						<p id="transition-modal-description">{address}?</p>
						<div className="mod-buttons">
							<button className="mod-buttons__button">Yes</button>
							<button className="mod-buttons__button" onClick={handleCloseDelete}>
								No
							</button>
						</div>
					</div>
				</Fade>
			</Modal>
			{/*  edit button modal */}
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={openedit}
				onClose={handleCloseEdit}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={openedit}>
					<div className={classes.paper}>
						<h4 id="transition-modal-title2">Choose something </h4>

						<div className="mod-buttons">
							<button className="mod-buttons__button">Ok</button>
							<button className="mod-buttons__button" onClick={handleCloseEdit}>
								Cancel
							</button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default ApiBox;
