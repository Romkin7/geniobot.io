import { DeleteOutline, Edit } from '@material-ui/icons';
import React, { FC, useContext } from 'react';
import Modal from '../Modal/Modal';
import { ModalContext } from '../../store/AppContext';
import { ICategory } from '../../@types';

interface ICategoryProps {
	category: ICategory;
	categoryClickHandler: (name: string) => void;
	active: boolean;
	deleteCategoryHandle: (id: number) => void;
}

const Category: FC<ICategoryProps> = ({ category, categoryClickHandler, active, deleteCategoryHandle }) => {
	const { modalOpen, toggleModal } = useContext(ModalContext);
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
					onClick={() => toggleModal(modalOpen, `Delete category: ${category.name}?`)}
				>
					<DeleteOutline style={{ fontSize: 30 }} />
				</button>
			</div>
			{/* <Modal title={`Delete category: ${category.name}?`} yesButtonHandle={() => deleteCategoryHandle(category.id)} /> */}
		</div>
	);
};

export default Category;
