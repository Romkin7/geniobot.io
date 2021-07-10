import React, { FC } from 'react';
import InvoiceList from './InvoiceList';

const Invoices: FC = () => {
	return (
		<section id="invoices">
			<p>Here you can find all invoices with geniobot.io</p>
			<p className="openinv">
				Open invoices <span>(0)</span>
			</p>
			<p>Paid invoices</p>
			<InvoiceList invnumber={987456321} paymentdate="10.07.2021" duedate="15.07.2021" amount={50} />
		</section>
	);
};

export default Invoices;
