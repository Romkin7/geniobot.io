import React, { FC, useState, useEffect } from 'react';
import InvoiceBox from './InvoiceBox';

import OpenInv from './OpenInv';
import axios from 'axios';
import { InvoiceData } from '../../../@types';
import { Link, useLocation, useParams } from 'react-router-dom';

const Invoices: FC = () => {
	const [invlist, setInvlist] = useState<InvoiceData[] | null>(null);
	let location = useLocation();
	let { id } = useParams<any>();
	console.log(location);
	useEffect(() => {
		if (!invlist) {
			axios.get('http://localhost:3010/invoices').then((res) => setInvlist(res.data));
		}
		console.log(invlist);
	});

	const notpaidinvoice = invlist?.filter((invoice) => {
		return invoice.status === false;
	});
	notpaidinvoice ? console.log(notpaidinvoice[0].number) : console.log('nothing');

	/* let { path, url } = useRouteMatch(); */
	const invoices = invlist?.map((invoice: InvoiceData) => {
		return (
			<InvoiceBox
				key={invoice.id}
				number={invoice.number}
				paymentdate={invoice.paymentdate}
				duedate={invoice.duedate}
				sum={invoice.sum}
				id={invoice.id}
			/>
		);
	});
	return (
		<section id="invoices">
			<p>Here you can find all invoices with geniobot.io</p>
			{notpaidinvoice ? (
				<Link
					to={{
						pathname: `invoices/${notpaidinvoice[0].number}`,
						state: { id },
					}}
				>
					<p className="openinv">Open invoices ({notpaidinvoice.length})</p>
				</Link>
			) : (
				<p className="openinv">Open invoices (0)</p>
			)}

			<p className="paid">Paid invoices</p>
			{invoices}
		</section>
	);
};

export default Invoices;
