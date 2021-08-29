import React, { FC, useContext } from 'react';
import { ILogo, IPlanType } from '../../@types';
import SubscriptionRing from '../Shared/SubscriptionRing';
import { AppContext } from '../../store/appContext';

const companylogo: ILogo = {
	src: 'https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/telia-logo_rnc4wl.png',
	alt: 'Telia logo',
};

const plantypeicon: IPlanType = {
	icon: 'https://res.cloudinary.com/geniobot-io/image/upload/v1625000773/x-pink_vzexd0.svg',
	alt: 'free subscription plan icon',
};

const Header: FC = () => {
	const { loggedInUser } = useContext(AppContext);
	const { isAuthenticated } = loggedInUser;
	return (
		<header>
			{!isAuthenticated ? (
				<section>login link</section>
			) : (
				<>
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
				</>
			)}
		</header>
	);
};

export default Header;
