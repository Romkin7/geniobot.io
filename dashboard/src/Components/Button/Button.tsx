import React, { FC, MouseEvent} from 'react';
import {ButtonTypes} from '../../@types/index';

interface IButtonProps {
	type: ButtonTypes;
	handleClick: (event: MouseEvent) => void;
}

const Button: FC<IButtonProps> = ({type, children, handleClick}) => {
    return (
		<button className="button" type={type} onClick={(event: MouseEvent) => handleClick(event)}>
			{children}
		</button>
	);
}

export default Button;
