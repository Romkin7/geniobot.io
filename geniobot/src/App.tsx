import React, { FC } from 'react';
import Header from './components/Header/Header';
import Chat from './components/Chat/Chat';

const App: FC = () => {
	return (
		<div className="geniobot">
			<Header
				handleClose={() => {}}
				logoSrc="https://res.cloudinary.com/geniobot-io/image/upload/v1624734071/Logo-dark_mscia0.svg"
				logoAlt="geniobot.io logo"
			/>
			<Chat />
		</div>
	);
};

export default App;
