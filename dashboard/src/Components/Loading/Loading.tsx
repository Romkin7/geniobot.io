import React, { FC, useContext } from 'react';
import { AppContext } from '../../store/appContext';

const Loading: FC = () => {
	const { loading } = useContext(AppContext);
	const { text } = loading;
	return (
		<div className="loading">
			<p className="loading--text">{text}</p>
		</div>
	);
};

export default Loading;
