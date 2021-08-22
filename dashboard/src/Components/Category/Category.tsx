import { DeleteOutline, Edit } from '@material-ui/icons';
import React, { FC, useContext } from 'react';
import { AppContext } from '../../store/appContext';
import { ICategory } from '../../@types';
import Button from '../Button/Button';

interface ICategoryProps {
	category: ICategory;
	categoryClickHandler: (name: string) => void;
	active: boolean;
	deleteCategoryHandle: (id: number) => void;
}

const Category: FC<ICategoryProps> = ({ category, categoryClickHandler, active, deleteCategoryHandle }) => {
	const { setModalAction } = useContext(AppContext);
	return (
		<div
			className={`automation__category-list__item__name ${active ? 'automation__category-list__item__name--active' : ''}`}
			onClick={() => categoryClickHandler(category.name)}
		>
			{category.name}
			<div className="automation__category-list__item__name__button-section">
				<Button type="button" variant="automation__category-list__item__name__button-section__edit" handleClick={() => {}}>
					<Edit style={{ fontSize: 30 }} />
				</Button>
				<Button
					type="button"
					variant="automation__category-list__item__name__button-section__delete"
					handleClick={() =>
						setModalAction({ modalOpen: true, title: `Delete category: ${category.name}?`, description: '', id: category.id })
					}
				>
					<DeleteOutline style={{ fontSize: 30 }} />
				</Button>
			</div>
		</div>
	);
};

export default Category;
