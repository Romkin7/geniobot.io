import React, { FC } from 'react';
import { AddCircleOutline, Edit, DeleteOutline, FiberManualRecord } from '@material-ui/icons';
import { Switch, Route, NavLink, Link, useRouteMatch, useLocation } from 'react-router-dom';

interface CatTopProps {
	catname: string;
	catid?: number;
	topicname: string;
	topicid: number;
}

const CatTop: FC<CatTopProps> = ({ catname, topicname, topicid }) => {
	let { path, url } = useRouteMatch();
	let location = useLocation();
	console.log(location);
	return (
		<>
			<section className="category-list">
				<h4>
					Categories <AddCircleOutline style={{ fontSize: 30 }} className="add-icon" />
				</h4>

				<div className="single-category">
					<NavLink to={`${url}/${catname.split(' ').join('-')}`}>
						{catname}
						<div className="button-section">
							<button className="edit-button">
								<Edit style={{ fontSize: 25 }} />
							</button>
							<button className="delete-button">
								<DeleteOutline style={{ fontSize: 25 }} />
							</button>
						</div>
					</NavLink>
				</div>
			</section>

			<section className="topics-list">
				<Switch>
					<Route path={path}>
						<ul>
							<li>
								<Link
									to={{
										pathname: `${url}/${topicname.split(' ').join('-')}`,
										state: { topicid },
									}}
								>
									<FiberManualRecord className="topics-icon" /> {topicname}
								</Link>
							</li>
							<li>something else</li>
						</ul>
					</Route>

					<Route path={`${path}/${catname.split(' ').join('-')}`}>
						<ul>
							<li>Topics for this {catname} category</li>
						</ul>
					</Route>
				</Switch>
			</section>
		</>
	);
};

export default CatTop;
