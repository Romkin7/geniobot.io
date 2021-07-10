import React, { FC } from 'react';
import { AddCircleOutline, Edit, DeleteOutline, FiberManualRecord } from '@material-ui/icons';
import { Switch, Route, NavLink, Link, useRouteMatch } from 'react-router-dom';

interface CatTopProps {
	catname: string;
	catid?: number;
	topicname: string;
	topicid: number;
}

const CatTop: FC<CatTopProps> = ({ catname, topicname, topicid }) => {
	let { path, url } = useRouteMatch();

	return (
		<>
			<section className="category-list">
				<h4>
					Categories <AddCircleOutline style={{ fontSize: 30 }} className="add-icon" role="button" />
				</h4>

				<NavLink to={`${url}/${catname.split(' ').join('-')}`}>
					<div className="single-category">
						{catname}
						<div className="button-section">
							<button className="edit-button">
								<Edit style={{ fontSize: 30 }} />
							</button>
							<button className="delete-button">
								<DeleteOutline style={{ fontSize: 30 }} />
							</button>
						</div>
					</div>
				</NavLink>
			</section>

			<section className="topics-list">
				<Switch>
					<Route exact path={path}>
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
						hello hello
					</Route>
				</Switch>
			</section>
		</>
	);
};

export default CatTop;
