import React, { FC } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Modal, Backdrop, Fade, FormControl, InputLabel, Select, Input, Chip, MenuItem } from '@material-ui/core';

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

const QuestionBox: FC<QuestioProps> = ({ question }) => {
	const classes = useStyles();
	/*delete button*/
	const [opendelete, setOpenDelete] = React.useState(false);
	/*edit button*/
	const [openedit, setOpenEdit] = React.useState(false);
	/*category names in select*/
	const [categoryName, setcategoryName] = React.useState([]);
	const theme = useTheme();

	/*multiple select*/
	const handleChange = (event: any) => {
		setcategoryName(event.target.value);
	};
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
	/*category names*/
	const names = ['Internet', 'Telephone', 'Business', 'Private'];
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
		<div className="intellect__question">
			{question}
			<div className="intellect__question__button-section">
				<button className="intellect__question__button-section__edit" onClick={handleOpenEdit}>
					<Edit style={{ fontSize: 30 }} />
				</button>
				<button className="intellect__question__button-section__delete" onClick={handleOpenDelete}>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>
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
						<h4 id="transition-modal-title">Do you really want to delete this question: </h4>
						<p id="transition-modal-description">{question}?</p>
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
						<h4 id="transition-modal-title2">Choose category where you want to move this question </h4>

						<FormControl className={classes.formControl}>
							<InputLabel id="demo-mutiple-chip-label"></InputLabel>
							<Select
								labelId="demo-mutiple-chip-label"
								id="demo-mutiple-chip"
								multiple
								value={categoryName}
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
									<MenuItem key={name} value={name} style={getStyles(name, categoryName, theme)}>
										{name}
									</MenuItem>
								))}
							</Select>
						</FormControl>
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

export default QuestionBox;
