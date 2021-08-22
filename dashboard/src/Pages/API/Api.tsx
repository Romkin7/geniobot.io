import React, { FC } from 'react';
import ApiBox from '../../Components/Main/ApiBox';
import { AddCircleOutline } from '@material-ui/icons';
import Button from '../../Components/Button/Button';

const Api: FC = () => {
	const colors: string[] = [
		' api-list__single-api__address--aquagreen',
		' api-list__single-api__address--lavender',
		' api-list__single-api__address--dazzlerose',
	];

	return (
		<div className="api-list">
			<p className="api-list__p">API-integrations list is a list of API address from where you want to take info to your chatbot</p>
			<h2 className="api-list__addbutton">
				ADD API
				<Button type="button" variant="" handleClick={() => {}}>
					<AddCircleOutline style={{ fontSize: 30, position: 'relative', top: '1.3vh', marginLeft: '1vw' }} />
				</Button>
			</h2>
			<ApiBox address="http://backend-app.io/data" name="balance" maincolor={colors[Math.floor(Math.random() * colors.length)]} />
			<ApiBox address="http://backend-app.io/data" name="balance" maincolor={colors[Math.floor(Math.random() * colors.length)]} />
		</div>
	);
};

export default Api;
