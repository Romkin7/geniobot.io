import React, { FC } from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import CatTop from '../Components/Main/Automation/CatTop';

const Automation: FC = () => {
	return (
		<>
			<div className="automation">
				<CatTop catname="Internet" topicid={1} topicname="How to connect to Telia" />
			</div>
		</>
	);
};

export default Automation;
