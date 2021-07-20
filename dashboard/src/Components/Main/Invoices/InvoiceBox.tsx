import React, { FC } from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { Invoice } from '../../../@types';

interface InvoiceBoxProps {
	invoice: Invoice;
}

const InvoiceBox: FC<InvoiceBoxProps> = ({ invoice }) => {
	const { number, sum, dueDate, paymentDate, id } = invoice;
	let location = useLocation();
	console.log(location);
	let { path, url } = useRouteMatch();
	return (
		<>
			<div className="invoices__box">
				<div>
					<h4>Invoice: {number} </h4>
					<p>Payment date: {paymentDate}</p>
					<p>Due date: {dueDate}</p>
				</div>

				<p className="invoices__box__amount">{sum}€</p>

				<Link to={`/invoices/${id}`}>
					{/* <Link
					to={{
						pathname: `/invoices/${number}`,
						state: { id },
					}}
				> */}
					<img
						src="https://res.cloudinary.com/geniobot-io/image/upload/v1625913414/arrow_forward_ios_anbmum.png"
						alt="open arrow"
					/>
				</Link>
			</div>
		</>
	);
};

export default InvoiceBox;
