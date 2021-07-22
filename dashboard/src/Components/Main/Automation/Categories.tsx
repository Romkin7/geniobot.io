import { AddCircleOutline, DeleteOutline, Edit } from '@material-ui/icons';
import React, { FC } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Categories: FC<any> = ({ category, click, active }) => {
	return (
		<>
			<div className={`automation__category-list__item__name ${active}`} onClick={click}>
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
		</>
	);
};

export default Categories;
