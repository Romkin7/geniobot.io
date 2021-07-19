import React, { FC, useState, useEffect, useCallback } from 'react';
import InvoiceBox from './InvoiceBox';

import OpenInv from './ShowInvoice';
import axios from 'axios';
import { Invoice } from '../../../@types';
import { Link, useLocation, useParams } from 'react-router-dom';

const Invoices: FC = () => {
	const [invoices, setInvoices] = useState<Invoice[] | null>(null);
	const [openInvoices, setOpenInvoices] = useState<Invoice[] | null>(null);
	let location = useLocation();
	let { id } = useParams<any>();
	//console.log(location);

	const updateOpenInvoices = useCallback(() => {
		const filteredInvoices = invoices?.filter((invoice: Invoice) => {
			return !invoice.paid;
		});
		setOpenInvoices(filteredInvoices as Invoice[]);
		console.log(openInvoices);
	}, [invoices, setOpenInvoices]);

	useEffect(() => {
		if (!invoices) {
			axios.get('invoices.json').then((res: any) => {
				console.log(res.data);
				setInvoices(res.data.invoices);
				updateOpenInvoices();
			});
		}
	}, [setInvoices, invoices, updateOpenInvoices]);

	return (
		<section id="invoices">
			<p>Here you can find all invoices with geniobot.io</p>
			{openInvoices ? (
				<Link
					to={{
						pathname: `invoices/${openInvoices[0].number}`,
						state: { id },
					}}
				>
					<p className="openinv">Open invoices ({openInvoices.length})</p>
				</Link>
			) : (
				<p className="openinv">Open invoices (0)</p>
			)}

			<p className="paid">Paid invoices</p>
			{invoices?.length &&
				invoices.map((invoice: Invoice) => {
					return <InvoiceBox key={invoice.id} invoice={invoice} />;
				})}
		</section>
	);
};

export default Invoices;
