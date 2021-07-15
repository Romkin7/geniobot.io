import React, { FC } from 'react';
import { Switch, Route, Link, useRouteMatch, withRouter, RouteComponentProps } from 'react-router-dom';
import OpenInv from './OpenInv';

interface InvoiceListProps {
	invnumber: number;
	paymentdate: string;
	duedate: string;
	amount: number;
	id: number;
	match: any;
}

const InvoiceList: FC<InvoiceListProps & RouteComponentProps> = ({ invnumber, paymentdate, duedate, amount, id, match }) => {
	console.log(match);
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
						pathname: `${match.url}/${invnumber}`,
						state: { id },
					}}
				>
					<img
						src="https://res.cloudinary.com/geniobot-io/image/upload/v1625913414/arrow_forward_ios_anbmum.png"
						alt="open arrow"
					/>
				</Link>
			</div>
		</>
	);
};

export default withRouter(InvoiceList);
