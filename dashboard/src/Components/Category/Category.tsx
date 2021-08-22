import { DeleteOutline, Edit } from '@material-ui/icons';
import React, { FC, useContext } from 'react';
import { AppContext } from '../../store/appContext';
import { ICategory } from '../../@types';

interface ICategoryProps {
	category: ICategory;
	categoryClickHandler: (name: string) => void;
	active: boolean;
	deleteCategoryHandle: (id: number) => void;
}

const Category: FC<ICategoryProps> = ({ category, categoryClickHandler, active, deleteCategoryHandle }) => {
	const appContext = useContext(AppContext);
	return (
		<div
			className={`automation__category-list__item__name ${active ? 'automation__category-list__item__name--active' : ''}`}
			onClick={() => categoryClickHandler(category.name)}
		>
			{category.name}
			<div className="automation__category-list__item__name__button-section">
				<button className="automation__category-list__item__name__button-section__edit">
					<Edit style={{ fontSize: 30 }} />
				</button>
				<button
					className="automation__category-list__item__name__button-section__delete"
					onClick={() =>
						appContext.setModalAction({ modalOpen: true, title: `Delete category: ${category.name}?`, description: '', id: category.id })
					}
				>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>
		</div>
	);
};

export default Category;
