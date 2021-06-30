import React, { FC } from 'react';
import { ButtonTypes, Sizes } from '../../@types';

interface IButtonProps {
	type: ButtonTypes;
	color: string;
	size: Sizes;
}

const Button: FC<IButtonProps> = ({ type, color, children, size }) => {
	return (
		<button type={type} className={'button button_' + color + ' ' + size}>
			{children}
		</button>
	);
};

export default Button;
