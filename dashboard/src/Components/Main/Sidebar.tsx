import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import {
	Timeline,
	EuroSymbol,
	MailOutline,
	Dialpad,
	CastForEducation,
	SettingsInputComposite,
	Settings,
	HelpOutline,
	Accessibility,
} from '@material-ui/icons';

const Sidebar: FC = () => {
	return (
		<aside>
			<section className="logo">
				<img src="https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/Logo_plmy4d.svg" alt="geniobot logo" />
			</section>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__item">
						<NavLink className="nav__link" exact to="/">
							<Timeline className="nav__icon" />
							Overview
						</NavLink>
					</li>

					<li className="nav__item">
						<NavLink className="nav__link" to="/invoices">
							<EuroSymbol className="nav__icon" />
							Invoices
						</NavLink>
					</li>

					<li className="nav__item">
						<NavLink className="nav__link" to="/messages">
							<MailOutline className="nav__icon" />
							Messages
						</NavLink>
					</li>

					<li className="nav__item">
						<NavLink className="nav__link" to="/automation">
							<Dialpad className="nav__icon" />
							Automation
						</NavLink>
					</li>

					<li className="nav__item">
						<NavLink className="nav__link" to="/intellect">
							<CastForEducation className="nav__icon" />
							Art. Intellect
						</NavLink>
					</li>

					<li className="nav__item">
						<NavLink className="nav__link" to="/api-list">
							<SettingsInputComposite className="nav__icon" />
							API-list
						</NavLink>
					</li>

					<li className="nav__item">
						<NavLink className="nav__link" to="/settings">
							<Settings className="nav__icon" />
							Settings
						</NavLink>
					</li>

					<li className="nav__item">
						<NavLink className="nav__link" to="/help">
							<HelpOutline className="nav__icon" />
							Help
						</NavLink>
					</li>

					<li className="nav__item">
						<NavLink className="nav__link" to="/administrator">
							<Accessibility className="nav__icon" />
							Administrator
						</NavLink>
					</li>
				</ul>
			</nav>
			<button>Upgrade to pro</button>
		</aside>
	);
};

export default Sidebar;
