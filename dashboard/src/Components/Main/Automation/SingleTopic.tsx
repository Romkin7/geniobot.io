import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const SingleTopic: FC = () => {
	/*defining location of the page - for axios location.state.id*/
	let location = useLocation();
	/*defining previous page for "go back" button*/
	let history = useHistory();
	return <div></div>;
};

export default SingleTopic;
