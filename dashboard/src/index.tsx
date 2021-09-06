import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import AppContextProvider from './store/appContext';

ReactDOM.render(
	<AppContextProvider>
		<App />
	</AppContextProvider>,
	document.getElementById('root'),
);
