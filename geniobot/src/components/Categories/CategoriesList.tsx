import React, { FC, useState } from 'react';
import { ICategory } from '../../@types';
import Category from './Category';

interface ICategoriesListProps {
	categories: ICategory[];
}

const CategoriesList: FC<ICategoriesListProps> = ({ categories }) => {
	const [active, setActive] = useState<number>(1);
	return (
		<ul className="geniobot--chat__categories">
			{categories.map((category: ICategory) => {
				return <Category key={category.id} active={active === category.id} setActive={setActive} category={category} />;
			})}
		</ul>
	);
};

export default CategoriesList;
