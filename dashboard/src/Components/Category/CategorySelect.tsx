import React, { FC, FormEvent } from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';
import Button from '../Button/Button';

const CategorySelect: FC = () => {
	const [categoryName, setcategoryName] = React.useState([]);

	/*category names*/
	const names = ['Internet', 'Telephone', 'Business', 'Private'];

	const handleChangeMultiple = (event: any) => {
		const { options } = event.target;
		const value: any = [];
		for (let i = 0, l = options.length; i < l; i += 1) {
			if (options[i].selected) {
				value.push(options[i].value);
			}
		}
		setcategoryName(value);
	};

	const popoverSubmit = (event: any) => {};

	return (
		<div className="popover">
			<FormControl className="popover__popover">
				<InputLabel shrink htmlFor="select-multiple-native" className="popover__title">
					Choose Categories
				</InputLabel>
				<Select
					multiple
					native
					value={categoryName}
					onChange={handleChangeMultiple}
					inputProps={{
						id: 'select-multiple-native',
					}}
				>
					{names.map((name) => (
						<option key={name} value={name} className="popover__category">
							{name}
						</option>
					))}
				</Select>
			</FormControl>
			<Button type="submit" variant="popover__button" handleClick={(event: FormEvent) => popoverSubmit(event)}>
				Ok
			</Button>
		</div>
	);
};

export default CategorySelect;
