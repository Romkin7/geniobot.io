import React, { FC } from 'react';
import { FiberManualRecord } from '@material-ui/icons';
import { Link } from 'react-router-dom';

interface TopicsProps {
	topicname: string;
	id: number;
}

const Topics: FC<TopicsProps> = ({ topicname, id }) => {
	return (
		<ul>
			<Link
				to={{
					pathname: `automation/${topicname.split(' ').join('-')}`,
					state: { id },
				}}
			>
				<li>
					<FiberManualRecord className="topics-icon" /> {topicname}
				</li>
			</Link>
		</ul>
	);
};

export default Topics;
