import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { IInvoice } from '../../../@types';

interface InvoiceBoxProps {
	invoice: IInvoice;
}

const InvoiceBox: FC<InvoiceBoxProps> = ({ invoice }) => {
	const { invoiceNumber, sum, dueDate, paymentDate, id } = invoice;

	return (
		<>
			<div className="invoices__box">
				<div>
					<h2 className="invoices__box__heading">Invoice: {invoiceNumber} </h2>
					<p className="invoices__box__p">Payment date: {paymentDate}</p>
					<p className="invoices__box__p">Due date: {dueDate}</p>
				</div>

				<p className="invoices__box__p invoices__box__amount">{sum}€</p>

				<Link className="invoices__box__link" to={`/invoices/${id}`}>
					{/* <Link
					to={{
						pathname: `/invoices/${number}`,
						state: { id },
					}}
				> */}
					<img
						className="invoices__box__icon"
						src="https://res.cloudinary.com/geniobot-io/image/upload/v1625913414/arrow_forward_ios_anbmum.png"
						alt="open arrow icon"
					/>
				</Link>
			</div>
		</>
	);
};

export default InvoiceBox;
