import { DeleteOutline, Edit } from '@material-ui/icons';
import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IAutomation, ITopic } from '../../@types';
import TransitionsModal from '../../Components/Shared/TransitionsModal';

interface ICategoryProps {
	category: string;
	categoryClickHandler: (category: string) => void;
	active: boolean;
	deleteCategoryHandle: () => void;
}

const Category: FC<ICategoryProps> = ({ category, categoryClickHandler, active, deleteCategoryHandle }) => {
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [categories, setCategories] = useState<string[] | null>(null);
	const [topics, setTopics] = useState<ITopic[] | null>(null);

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	return (
		<div
			className={`automation__category-list__item__name ${active ? 'automation__category-list__item__name--active' : ''}`}
			onClick={() => categoryClickHandler(category)}
		>
			{category}
			<div className="automation__category-list__item__name__button-section">
				<button className="automation__category-list__item__name__button-section__edit">
					<Edit style={{ fontSize: 30 }} />
				</button>
				<button className="automation__category-list__item__name__button-section__delete" onClick={handleOpenModal}>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>
			<TransitionsModal
				heading={`Delete category: ${category}?`}
				yes="Yes"
				no="No"
				description=""
				handleOpenModal={handleOpenModal}
				handleCloseModal={handleCloseModal}
				open={openModal}
				yesButtonHandle={() => deleteCategoryHandle()}
			/>
		</div>
	);
};

export default Category;
