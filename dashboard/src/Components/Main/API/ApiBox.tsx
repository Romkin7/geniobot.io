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

function getStyles(name: any, categoryName: any, theme: any) {
	return {
		fontWeight: categoryName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
	};
}

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
		<section className="single-api">
			<div className="section-buttons">
				<button className="button" onClick={handleOpenEdit}>
					<Edit style={{ fontSize: 30 }} />
				</button>
				<button className="button" onClick={handleOpenDelete}>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>

			<ul>
				<span className={maincolor}>{address}</span>
				<li>
					<FiberManualRecord className={`center-line ${maincolor}  `} style={{ fontSize: 20 }} />
					{name}
				</li>
				<li>
					<FiberManualRecord className={`center-line ${maincolor}  `} style={{ fontSize: 20 }} />
					agreement number
				</li>
				<li>
					<FiberManualRecord className={`center-line ${maincolor}  `} style={{ fontSize: 20 }} />
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
							<button className="modal-button">Yes</button>
							<button className="modal-button" onClick={handleCloseDelete}>
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
							<button className="modal-button">Ok</button>
							<button className="modal-button" onClick={handleCloseEdit}>
								Cancel
							</button>
						</div>
					</div>
				</Fade>
			</Modal>
		</section>
	);
};

export default ApiBox;
