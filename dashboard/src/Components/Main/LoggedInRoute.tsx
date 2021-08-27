import React, { ComponentType, FC, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IUser } from '../../@types';
import { AppContext } from '../../store/appContext';

interface ILoggedInRouteProps {
	exact?: boolean;
	user?: IUser;
	isAuthenticated: boolean | null;
	path: string;
	Component: ComponentType<any>;
}

const LoggedInRoute: FC<ILoggedInRouteProps> = ({ Component, ...rest }) => {
	const { loggedInUser } = useContext(AppContext);
	const { isAuthenticated, user } = loggedInUser;
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthenticated && !user?.account.active) {
					return <div>Your bill is not paid</div>;
				} else if (isAuthenticated) {
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

export default LoggedInRoute;
