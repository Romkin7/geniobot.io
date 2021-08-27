import React, { ComponentType, FC, useContext } from 'react';

import { Redirect, Route } from 'react-router-dom';
import { AppContext } from '../../store/appContext';

interface ILoggedOutRouteProps {
	exact?: boolean;
	path: string;
	Component: ComponentType<any>;
}

const LoggedOutRoute: FC<ILoggedOutRouteProps> = ({ Component, ...rest }) => {
	const { loggedInUser } = useContext(AppContext);
	const { isAuthenticated } = loggedInUser;
	return (
		<Route
			{...rest}
			render={(props) => {
				if (!isAuthenticated) {
					return <Component {...props} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: '/',
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default LoggedOutRoute;
