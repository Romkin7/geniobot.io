import React, { FC, useState } from 'react';
import { InputTypes } from '../../@types';

interface IInputProps {
	type: InputTypes;
	label: string;
	required: boolean;
	disabled?: boolean;
	name: string;
	changeHandler: (event: any) => void;
}

const Input: FC<IInputProps> = ({ type, label, required, disabled, name, changeHandler }) => {
	const [value, setValue] = useState<string>('');
	const handleChange = (event: any) => {
		changeHandler(event.target.value);
		setValue(event.target.value);
	};
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				type={type}
				className="input"
				onInput={(event: any) => handleChange(event)}
				value={value}
				required={required}
				disabled={disabled}
			/>
		</>
	);
};

export default Input;
