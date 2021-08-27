import React, { FC, useState, useEffect, useCallback } from 'react';
import InvoiceBox from '../../Components/Main/Invoices/InvoiceBox';
import axios from 'axios';
import { IInvoice } from '../../@types';
import { Link, useParams } from 'react-router-dom';

const Invoices: FC = () => {
	const [invoices, setInvoices] = useState<IInvoice[] | null>(null);
	const [openInvoices, setOpenInvoices] = useState<IInvoice[] | null>(null);
	let { id } = useParams<{id?: string}>();

	const updateOpenInvoices = useCallback(() => {
		const filteredInvoices = invoices?.filter((invoice: IInvoice) => {
			return !invoice.paid;
		});
		setOpenInvoices(filteredInvoices as IInvoice[]);
	}, [invoices, setOpenInvoices]);

	useEffect(() => {
		if (!invoices) {
			axios.get('invoices.json').then((res: {data: {invoices: IInvoice[]}}) => {
				setInvoices(res.data.invoices);
				updateOpenInvoices();
			});
		}
	}, [setInvoices, invoices, updateOpenInvoices]);

	return (
		<section className="invoices">
			<h1>Here you can find all invoices with geniobot.io</h1>
			{openInvoices ? (
				<Link
					to={{
						pathname: `invoices/${openInvoices[0].invoiceNumber}`,
						state: { id },
					}}
				>
					<p className="invoices__openinv">Open invoices ({openInvoices.length})</p>
				</Link>
			) : (
				<p className="invoices__openinv">Open invoices (0)</p>
			)}

			<p className="invoices__paid">Paid invoices</p>
			{invoices?.length &&
				invoices.map((invoice: IInvoice) => {
					return <InvoiceBox key={invoice.id} invoice={invoice} />;
				})}
		</section>
	);
};

export default Invoices;
