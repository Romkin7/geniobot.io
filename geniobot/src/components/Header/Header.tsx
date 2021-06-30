import React, { FC } from 'react';
import { IconButton } from '@material-ui/core';
import { Close, Language } from '@material-ui/icons';

interface IHeader {
	handleClose: () => void;
	logoSrc: string;
	logoAlt: string;
}

const Header: FC<IHeader> = ({ handleClose, logoSrc, logoAlt }) => {
	return (
		<header className="geniobot--header">
			<img className="geniobot--header__logo" src={logoSrc} alt={logoAlt} />
			<IconButton>
				<Language />
			</IconButton>
			<IconButton onClick={handleClose}>
				<Close />
			</IconButton>
		</header>
	);
};

export default Header;
