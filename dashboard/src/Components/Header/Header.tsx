import React, { FC } from 'react';
import { ILogo } from '../../@types';
import SubscriptionRing from '../Shared/SubscriptionRing';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const companylogo: ILogo = {
	src: 'https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/telia-logo_rnc4wl.png',
	alt: 'Telia logo',
};

const Header: FC = () => {
	return (
		<header>
			<section className="companylogo">
				<img src={companylogo.src} alt={companylogo.alt} />
			</section>
			<section className="subscriptionplan">
				<SubscriptionRing />
			</section>
			<section className="specification">
				<ul>
					<li>
						<HighlightOffIcon className="header-icon" />
						Unlimited interactions/month
					</li>
					<li>
						<HighlightOffIcon className="header-icon" />
						API integration
					</li>
					<li>
						<HighlightOffIcon className="header-icon" />
						AI activation
					</li>
				</ul>
			</section>
		</header>
	);
};

export default Header;
