import React, { FC } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import OpenInv from './OpenInv';

interface InvoiceListProps {
	invnumber: number;
	paymentdate: string;
	duedate: string;
	amount: number;
	id: number;
}

const InvoiceList: FC<InvoiceListProps> = ({ invnumber, paymentdate, duedate, amount, id }) => {
	let { path, url } = useRouteMatch();
	return (
		<>
			<div className="invoice-box">
				<div>
					<h4>Invoice: {invnumber} </h4>
					<p>Payment date: {paymentdate}</p>
					<p>Due date: {duedate}</p>
				</div>

				<p className="amount">{amount}€</p>

				<Link
					to={{
						pathname: `${url}/${invnumber}`,
						state: { id },
					}}
				>
					<img
						src="https://res.cloudinary.com/geniobot-io/image/upload/v1625913414/arrow_forward_ios_anbmum.png"
						alt="open arrow"
					/>
				</Link>
			</div>
			<Route path={`${path}/${invnumber}`}>
				<OpenInv />
			</Route>
		</>
	);
};

export default InvoiceList;
