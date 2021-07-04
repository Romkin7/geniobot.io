import React, { FC } from 'react';
import { Edit, DeleteOutline } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

interface CatProps {
	catname: string;
}

const Categories: FC<CatProps> = ({ catname }) => {
	return (
		<div className="single-category">
			<NavLink to={`/${catname.split(' ').join('-')}`}>
				{catname}
				<div className="button-section">
					<button className="edit-button">
						<Edit style={{ fontSize: 25 }} />
					</button>
					<button className="delete-button">
						<DeleteOutline style={{ fontSize: 25 }} />
					</button>
				</div>
			</NavLink>
		</div>
	);
};

export default Categories;
