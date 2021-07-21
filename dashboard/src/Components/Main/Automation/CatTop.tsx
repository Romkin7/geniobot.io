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
			<section className="automation__category-list">
				<h2 className="automation__category-list__button">
					Categories
					<AddCircleOutline style={{ fontSize: 30 }} className="automation__category-list__button__icon" role="button" />
				</h2>

				<NavLink
					activeClassName="automation__category-list__item--active"
					className="automation__category-list__item"
					to={`${url}/${catname.split(' ').join('-')}`}
				>
					<div className="automation__category-list__item__name">
						{catname}
						<div className="automation__category-list__item__name__button-section">
							<button className="automation__category-list__item__name__button-section__edit">
								<Edit style={{ fontSize: 30 }} />
							</button>
							<button className="automation__category-list__item__name__button-section__delete">
								<DeleteOutline style={{ fontSize: 30 }} />
							</button>
						</div>
					</div>
				</NavLink>
			</section>

			<div className="automation__topics-list">
				<Switch>
					<Route exact path={path}>
						<ul>
							<li className="automation__topics-list__item">
								<Link
									to={{
										pathname: `${url}/${topicname.split(' ').join('-')}`,
										state: { topicid },
									}}
								>
									<FiberManualRecord className="automation__topics-list__item__icon" /> {topicname}
								</Link>
							</li>
						</ul>
					</Route>

					<Route path={`${path}/${catname.split(' ').join('-')}`}>
						<ul>
							<li className="automation__topics-list__item">Topics for this {catname} category</li>
						</ul>
						hello hello
					</Route>
				</Switch>
			</div>
		</>
	);
};

export default CatTop;
