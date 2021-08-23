import React, { FC } from 'react';
import { FormControl, InputLabel, Select, Input, Chip, MenuItem } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

const CategorySelect: FC = () => {
	const classes = useStyles();
	const [categoryName, setcategoryName] = React.useState([]);
	const theme = useTheme();

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

	const handleChange = (event: any) => {
		setcategoryName(event.target.value);
	};
	return (
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
	);
};

export default CategorySelect;
