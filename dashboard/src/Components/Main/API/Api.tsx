import React, { FC } from 'react';
import ApiBox from './ApiBox';

const Api: FC = () => {
	return (
		<section id="api-list">
			<p>API-integrations list is a list of API address from where you want to take info to your chatbot</p>
			<ApiBox address="http://backend-app.io/data" name="balance" />
		</section>
	);
};

export default Api;
