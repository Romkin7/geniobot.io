import React, { ComponentType, FC } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IUser } from '../../@types';

interface ILoggedInRouteProps {
	exact?: boolean;
	user?: IUser;
	isAuthenticated: boolean | null;
	path: string;
	Component: ComponentType<any>;
}

const LoggedInRoute: FC<ILoggedInRouteProps> = ({ isAuthenticated, Component, user, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				if (isAuthenticated && !user?.userAccount.isActive) {
					return <ActivateAccountInfo />;
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
