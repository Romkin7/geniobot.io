import React, { FC } from 'react';
import { ICategory } from '../../@types';

interface ICategoryProps {
	category: ICategory;
	setActive: (id: number) => void;
	active: boolean;
}

const Category: FC<ICategoryProps> = ({ category, active, setActive }) => {
	return (
		<li
			onClick={() => setActive(category.id)}
			className={
				active
					? `geniobot--chat__categories-category geniobot--chat__categories-category-active`
					: `geniobot--chat__categories-category`
			}
		>
			{category.name}
		</li>
	);
};

export default Category;
