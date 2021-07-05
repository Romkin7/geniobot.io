import React, { FC } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';

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
		backgroundColor: 'rgba(32, 29, 63, 1)',
		border: '1px solid #000',
		boxShadow: theme.shadows[5],
		padding: '5vw',
		borderRadius: '20px',
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
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

function getStyles(name: any, personName: any, theme: any) {
	return {
		fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
	};
}

const Question: FC<QuestioProps> = ({ question }) => {
	const classes = useStyles();
	const [opendelete, setOpenDelete] = React.useState(false);
	const [openedit, setOpenEdit] = React.useState(false);
	const [personName, setPersonName] = React.useState([]);
	const theme = useTheme();

	/*multiple select*/
	const handleChange = (event: any) => {
		setPersonName(event.target.value);
	};

	const handleOpenDelete = () => {
		setOpenDelete(true);
	};
	const handleOpenEdit = () => {
		setOpenEdit(true);
	};

	const handleCloseDelete = () => {
		setOpenDelete(false);
	};
	const handleCloseEdit = () => {
		setOpenEdit(false);
	};

	const names = [
		'Oliver Hansen',
		'Van Henry',
		'April Tucker',
		'Ralph Hubbard',
		'Omar Alexander',
		'Carlos Abbott',
		'Miriam Wagner',
		'Bradley Wilkerson',
		'Virginia Andrews',
		'Kelly Snyder',
	];
	const ITEM_HEIGHT = 48;
	const ITEM_PADDING_TOP = 8;
	const MenuProps = {
		PaperProps: {
			style: {
				maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
				width: 250,
			},
		},
	};

	return (
		<div className="question">
			{question}
			<div className="button-section">
				<button className="edit-button" onClick={handleOpenEdit}>
					<Edit style={{ fontSize: 30 }} />
				</button>
				<button className="delete-button" onClick={handleOpenDelete}>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>
			{/*  delete modal */}
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
						<h4 id="transition-modal-title">Do you really want to delete this question: </h4>
						<p id="transition-modal-description">{question}?</p>
						<div className="mod-buttons">
							<button className="modal-button">Yes</button>
							<button className="modal-button" onClick={handleCloseDelete}>
								No
							</button>
						</div>
					</div>
				</Fade>
			</Modal>

			{/*  edit modal */}
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
						<h4 id="transition-modal-title2">Choose category where you want to move this question </h4>
						{/* <p id="transition-modal-description2">here will be list of categories</p> */}
						<FormControl className={classes.formControl}>
							<InputLabel id="demo-mutiple-chip-label"></InputLabel>
							<Select
								labelId="demo-mutiple-chip-label"
								id="demo-mutiple-chip"
								multiple
								value={personName}
								onChange={handleChange}
								input={<Input id="select-multiple-chip" />}
								renderValue={(selected: any) => (
									<div className={classes.chips}>
										{selected.map((value: any) => (
											<Chip key={value} label={value} className={classes.chip} />
										))}
									</div>
								)}
								MenuProps={MenuProps}
							>
								{names.map((name) => (
									<MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<div className="mod-buttons">
							<button className="modal-button">Ok</button>
							<button className="modal-button" onClick={handleCloseEdit}>
								Cancel
							</button>
						</div>
					</div>
				</Fade>
			</Modal>
		</div>
	);
};

export default Question;
