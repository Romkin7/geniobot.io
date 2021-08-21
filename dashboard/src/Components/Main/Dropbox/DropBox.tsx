/* import React, { FC } from 'react';
import { FormControl, InputLabel, Select, Input, Chip, MenuItem } from '@material-ui/core';




const DropBox: FC = () => {
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

export default DropBox;
 */
