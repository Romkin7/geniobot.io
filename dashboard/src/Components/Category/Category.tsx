import { DeleteOutline, Edit } from '@material-ui/icons';
import React, { FC } from 'react';

interface ICategoryProps {
	category: string;
	categoryClickHandler: (category: string) => void;
	active: boolean | null;
}

const Category: FC<ICategoryProps> = ({ category, categoryClickHandler, active }) => {
	return (
		<>
			<div className={`automation__category-list__item__name${active ? '--active' : ''}`} onClick={() => categoryClickHandler(category)}>
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

export default Category;
