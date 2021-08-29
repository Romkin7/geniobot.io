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
			<picture>
				<source srcSet="https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/Logo_plmy4d.svg" />
				<img
					className="logo__sidebar"
					src="https://res.cloudinary.com/geniobot-io/image/upload/v1624693972/Logo_plmy4d.svg"
					alt="geniobot logo"
				/>
			</picture>
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav__list__item">
						<NavLink className="nav__list__link" activeClassName="nav__list__link--active" exact to="/overview">
							<Timeline className="nav__list__icon" />
							Overview
						</NavLink>
					</li>

					<li className="nav__list__item">
						<NavLink className="nav__list__link" activeClassName="nav__list__link--active" to="/invoices">
							<EuroSymbol className="nav__list__icon" />
							Invoices
						</NavLink>
					</li>

					<li className="nav__list__item">
						<NavLink className="nav__list__link" activeClassName="nav__list__link--active" to="/messages">
							<MailOutline className="nav__list__icon" />
							Messages
						</NavLink>
					</li>

					<li className="nav__list__item">
						<NavLink className="nav__list__link" activeClassName="nav__list__link--active" to="/automation">
							<Dialpad className="nav__list__icon" />
							Automation
						</NavLink>
					</li>

					<li className="nav__list__item">
						<NavLink className="nav__list__link" activeClassName="nav__list__link--active" to="/intellect">
							<CastForEducation className="nav__list__icon" />
							Art. Intellect
						</NavLink>
					</li>

					<li className="nav__list__item">
						<NavLink className="nav__list__link" activeClassName="nav__list__link--active" to="/api-list">
							<SettingsInputComposite className="nav__list__icon" />
							API-list
						</NavLink>
					</li>

					<li className="nav__list__item">
						<NavLink className="nav__list__link" activeClassName="nav__list__link--active" to="/settings">
							<Settings className="nav__list__icon" />
							Settings
						</NavLink>
					</li>

					<li className="nav__list__item">
						<NavLink className="nav__list__link" activeClassName="nav__list__link--active" to="/help">
							<HelpOutline className="nav__list__icon" />
							Help
						</NavLink>
					</li>

					<li className="nav__list__item">
						<NavLink className="nav__list__link" activeClassName="nav__list__link--active" to="/administrator">
							<Accessibility className="nav__list__icon" />
							Administrator
						</NavLink>
					</li>
				</ul>
			</nav>
			<button className="button__sidebar">Upgrade to pro</button>
		</aside>
	);
};

export default Sidebar;
