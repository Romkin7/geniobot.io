import React, { FC } from 'react';
import { ButtonTypes, IconNames } from '../../@types';

interface IIconButtonProps {
	type: ButtonTypes;
	iconName: IconNames;
}

const IconButton: FC<IIconButtonProps> = ({ type, iconName }) => {
	return <button className="iconbutton" type={type}></button>;
};

export default IconButton;
