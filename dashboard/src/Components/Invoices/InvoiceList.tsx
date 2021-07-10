import React, { FC } from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

interface InvoiceListProps {
	invnumber: number;
	paymentdate: string;
	duedate: string;
	amount: number;
}

const InvoiceList: FC<InvoiceListProps> = ({ invnumber, paymentdate, duedate, amount }) => {
	return (
		<div className="invoice-box">
			<div>
				<h4>Invoice: {invnumber} </h4>
				<p>Payment date: {paymentdate}</p>
				<p>Due date: {duedate}</p>
			</div>

			<p className="amount">{amount}€</p>
			<img src="https://res.cloudinary.com/geniobot-io/image/upload/v1625913414/arrow_forward_ios_anbmum.png" alt="open arrow" />
		</div>
	);
};

export default InvoiceList;
