import React, { FC, useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './ProgressProvider';
import { PlanType } from '../../@types/index.d';

/* interface RingValueProps {
	setvalue: (event: any) => void;
} */

const SubscriptionRing: FC /* <RingValueProps> */ = () => {
	/* const [value, setValue] = useState(0.55); */

	const freeplantype: PlanType = {
		src: 'https://res.cloudinary.com/geniobot-io/image/upload/v1624997376/FREE_thslxx.svg',
		alt: 'free subscription plan',
	};
	const proplantype: PlanType = {
		src: 'https://res.cloudinary.com/geniobot-io/image/upload/v1624997376/PRO_jsvfzy.svg',
		alt: 'pro subscription plan',
	};

	const value = 0.55;

	return (
		<div style={{ width: 120, height: 120 }}>
			<ProgressProvider valueStart={0} valueEnd={value}>
				{(value) => (
					<CircularProgressbarWithChildren
						className="freesubscription"
						value={value}
						minValue={0}
						maxValue={1}
						/* text={`free`} */
						/* background={true} */
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
					>
						<img className="subscrplan" src={freeplantype.src} alt={freeplantype.alt} />
					</CircularProgressbarWithChildren>
				)}
			</ProgressProvider>
		</div>
	);
};

export default SubscriptionRing;
