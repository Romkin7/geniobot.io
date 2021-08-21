import React, { FC, MouseEvent } from 'react';
import { ButtonTypes } from '../../@types/index';

interface IButtonProps {
	type: ButtonTypes;
	handleClick: (event: MouseEvent) => void;
	style: string;
}

const Button: FC<IButtonProps> = ({ type, children, handleClick, style }) => {
	return (
		<button className={style} type={type} onClick={(event: MouseEvent) => handleClick(event)}>
			{children}
		</button>
	);
};

export default Button;
