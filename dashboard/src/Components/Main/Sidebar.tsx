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
			<nav>
				<ul>
					<li>
						<NavLink exact to="/">
							<Timeline className="icon" />
							Overview
						</NavLink>
					</li>

					<li>
						<NavLink to="/invoices">
							<EuroSymbol className="icon" />
							Invoices
						</NavLink>
					</li>

					<li>
						<NavLink to="/messages">
							<MailOutline className="icon" />
							Messages
						</NavLink>
					</li>

					<li>
						<NavLink to="/automation">
							<Dialpad className="icon" />
							Automation
						</NavLink>
					</li>

					<li>
						<NavLink to="/intellect">
							<CastForEducation className="icon" />
							Art. Intellect
						</NavLink>
					</li>

					<li>
						<NavLink to="/api-list">
							<SettingsInputComposite className="icon" />
							API-list
						</NavLink>
					</li>

					<li>
						<NavLink to="/settings">
							<Settings className="icon" />
							Settings
						</NavLink>
					</li>

					<li>
						<NavLink to="/help">
							<HelpOutline className="icon" />
							Help
						</NavLink>
					</li>

					<li>
						<NavLink to="/administrator">
							<Accessibility className="icon" />
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
