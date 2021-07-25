import { FiberManualRecord } from '@material-ui/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface ITopicProps {
	topic: string;
}

const Topics: FC<ITopicProps> = ({ topic }) => {
	/* const id: number = useParams(); */
	return (
		<li className="automation__topics-list__item">
			<Link
				to={{
					pathname: `automation/${topic.split(' ').join('-')}`,
					/* state: { id }, */
				}}
			>
				<FiberManualRecord className="automation__topics-list__item__icon" /> {topic}
			</Link>
		</li>
	);
};

export default Topics;
