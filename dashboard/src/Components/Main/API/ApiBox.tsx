import React, { FC } from 'react';

interface ApiBoxProps {
	address: string;
	name: string;
}

const ApiBox: FC<ApiBoxProps> = ({ address, name }) => {
	return (
		<section className="single-api">
			<ul>
				{address}
				<li>{name}</li>
				<li>agreement number</li>
				<li>unpaid invoices</li>
			</ul>
		</section>
	);
};

export default ApiBox;
