import { DeleteOutline, Edit } from '@material-ui/icons';
import React, { FC, useState } from 'react';
import TransitionsModal from '../../Components/Shared/TransitionsModal';

interface ICategoryProps {
	category: string;
	categoryClickHandler: (category: string) => void;
	active: boolean;
}

const Category: FC<ICategoryProps> = ({ category, categoryClickHandler, active }) => {
	const [openModal, setOpenModal] = useState<boolean>(false);
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
			/>
		</div>
	);
};

export default Category;
