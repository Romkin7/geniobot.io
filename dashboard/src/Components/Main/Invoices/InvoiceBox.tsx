import React, { FC } from 'react';
import { Link, useRouteMatch, withRouter, RouteComponentProps, useLocation } from 'react-router-dom';
import { InvoiceData } from '../../../@types';

const InvoiceBox: FC<InvoiceData /*  & RouteComponentProps */> = ({ number, paymentdate, duedate, sum, id }) => {
	let location = useLocation();
	console.log(location);
	let { path, url } = useRouteMatch();
	return (
		<>
			<div className="invoice-box">
				<div>
					<h4>Invoice: {number} </h4>
					<p>Payment date: {paymentdate}</p>
					<p>Due date: {duedate}</p>
				</div>

				<p className="amount">{sum}€</p>

				<Link
					to={{
						pathname: `invoices/${number}`,
						/* pathname: `${match.url}/${number}`, */
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

/* export default withRouter(InvoiceBox); */
export default InvoiceBox;
