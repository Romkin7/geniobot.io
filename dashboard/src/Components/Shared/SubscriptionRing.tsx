import React, { FC, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';

/* interface RingValueProps {
	setvalue: (event: any) => void;
} */

const SubscriptionRing: FC /* <RingValueProps> */ = () => {
	/* const [value, setValue] = useState(0.55); */
	const value = 0.55;

	return (
		<div style={{ width: 120, height: 120 }}>
			<ProgressProvider valueStart={0} valueEnd={value}>
				{(value) => (
					<CircularProgressbar
						className="freesubscription"
						value={value}
						minValue={0}
						maxValue={1}
						text={`free`}
						strokeWidth={5}
						styles={buildStyles({
							rotation: 0.1,

							pathColor: 'rgba(255, 184, 1, 1)',
							textColor: '#ff4dca',
							trailColor: 'rgba(69, 68, 91, 0.9)',
							backgroundColor: 'transparent',
							pathTransition: 'stroke-dashoffset 0.2s ease 0.2s',

							pathTransitionDuration: 0.5,
						})}
					/>
				)}
			</ProgressProvider>
		</div>
	);
};

export default SubscriptionRing;
