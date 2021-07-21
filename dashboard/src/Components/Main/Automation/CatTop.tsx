import React, { FC } from 'react';
import { AddCircleOutline, Edit, DeleteOutline, FiberManualRecord } from '@material-ui/icons';
import { Switch, Route, NavLink, Link, useRouteMatch } from 'react-router-dom';
import { IAutomation } from '../../../@types';
import axios from 'axios';

const CatTop: FC<IAutomation> = ({ category, topic, id }) => {
	let { path, url } = useRouteMatch();

	return (
		<>
			{
				<section className="automation__category-list">
					<h2 className="automation__category-list__button">
						Categories
						<AddCircleOutline style={{ fontSize: 30 }} className="automation__category-list__button__icon" role="button" />
					</h2>

					<NavLink
						activeClassName="automation__category-list__item--active"
						className="automation__category-list__item"
						to={`${url}/${category.split(' ').join('-')}`}
					>
						<div className="automation__category-list__item__name">
							{category}
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
			}

			<div className="automation__topics-list">
				<Switch>
					<Route exact path={path}>
						<ul>
							<li className="automation__topics-list__item">
								<Link
									to={{
										pathname: `${url}/${topic.split(' ').join('-')}`,
										state: { id },
									}}
								>
									<FiberManualRecord className="automation__topics-list__item__icon" /> {topic}
								</Link>
							</li>
						</ul>
					</Route>

					<Route path={`${path}/${category.split(' ').join('-')}`}>
						<ul>
							<li className="automation__topics-list__item">Topics for this {category} category</li>
						</ul>
						hello hello
					</Route>
				</Switch>
			</div>
		</>
	);
};

export default CatTop;
