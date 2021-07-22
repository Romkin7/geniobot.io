import { AddCircleOutline, DeleteOutline, Edit } from '@material-ui/icons';
import React, { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Categories: FC<any> = ({ category }) => {
	let { categorylink }: { categorylink: string } = useParams();
	categorylink = category;
	console.log(categorylink);
	return (
		<>
			<NavLink
				activeClassName="automation__category-list__item--active"
				className="automation__category-list__item"
				to={`automation/${categorylink.split(' ').join('-')}`}
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
		</>
	);
};

export default Categories;
