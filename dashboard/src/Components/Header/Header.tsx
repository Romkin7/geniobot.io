import React, { FC } from 'react';
import { ILogo, PlanType } from '../../@types/index.d';
import SubscriptionRing from '../Shared/SubscriptionRing';

const companylogo: ILogo = {
	src: 'https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/telia-logo_rnc4wl.png',
	alt: 'Telia logo',
};

const plantypeicon: PlanType = {
	icon: 'https://res.cloudinary.com/geniobot-io/image/upload/v1625000773/x-pink_vzexd0.svg',
	alt: 'free subscription plan icon',
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
						<img src={plantypeicon.icon} alt={plantypeicon.alt} className="header-icon" />
						Unlimited interactions/month
					</li>
					<li>
						<img src={plantypeicon.icon} alt={plantypeicon.alt} className="header-icon" />
						API integration
					</li>
					<li>
						<img src={plantypeicon.icon} alt={plantypeicon.alt} className="header-icon" />
						AI activation
					</li>
				</ul>
			</section>
		</header>
	);
};

export default Header;
