import React, { FC } from 'react';
import ApiBox from '../Components/Main/ApiBox';
import { AddCircleOutline } from '@material-ui/icons';

const Api: FC = () => {
	const colors: string[] = ['aquagreen', 'lavender', 'dazzlerose'];
	/* const forcolor = () => {
		for (let i = 0; i < colors.length; i++) {
			return colors[i];
		}
	}; */
	return (
		<section id="api-list">
			<p>API-integrations list is a list of API address from where you want to take info to your chatbot</p>
			<h4>
				ADD API
				<button>
					<AddCircleOutline style={{ fontSize: 30, position: 'relative', top: '1.3vh', marginLeft: '1vw' }} />
				</button>
			</h4>
			<ApiBox address="http://backend-app.io/data" name="balance" maincolor={colors[Math.floor(Math.random() * colors.length)]} />
			<ApiBox address="http://backend-app.io/data" name="balance" maincolor={colors[Math.floor(Math.random() * colors.length)]} />
		</section>
	);
};

export default Api;
