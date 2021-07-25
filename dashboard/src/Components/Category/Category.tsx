import { DeleteOutline, Edit } from '@material-ui/icons';
import React, { FC, useState } from 'react';
import Modal from '../Modal/Modal';

interface ICategoryProps {
	category: string;
	categoryClickHandler: (category: string) => void;
	active: boolean;
	deleteCategoryHandle: (category: string) => void;
}

const Category: FC<ICategoryProps> = ({ category, categoryClickHandler, active, deleteCategoryHandle }) => {
	const [openModal, setOpenModal] = useState<boolean>(false);

	const handleModalState = () => {
		setOpenModal(!openModal);
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
				<button className="automation__category-list__item__name__button-section__delete" onClick={handleModalState}>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>
			<Modal
				title={`Delete category: ${category}?`}
				handleCloseModal={handleModalState}
				open={openModal}
				yesButtonHandle={() => deleteCategoryHandle(category)}
			/>
		</div>
	);
};

export default Category;
