import React, { FC, MouseEvent } from 'react';
import { ButtonTypes } from '../../@types';

interface IButtonProps {
	type: ButtonTypes;
	handleClick: (event: MouseEvent) => void;
	variant: string;
}

const Button: FC<IButtonProps> = ({ type, children, handleClick, variant }) => {
	return (
		<button className={variant} type={type} onClick={(event: MouseEvent) => handleClick(event)}>
			{children}
		</button>
	);
};

export default Button;
