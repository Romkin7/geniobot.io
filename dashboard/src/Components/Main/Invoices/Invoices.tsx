import React, { FC } from 'react';
import InvoiceList from './InvoiceList';
import { Switch, Route, NavLink, Link, useRouteMatch } from 'react-router-dom';
import OpenInv from './OpenInv';

const Invoices: FC = () => {
	let { path, url } = useRouteMatch();
	return (
		<section id="invoices">
			<p>Here you can find all invoices with geniobot.io</p>
			<p className="openinv">
				Open invoices <span>(0)</span>
			</p>
			<p>Paid invoices</p>
			<InvoiceList invnumber={987456321} paymentdate="10.07.2021" duedate="15.07.2021" amount={50} id={12} />
			<OpenInv />
		</section>
	);
};

export default Invoices;
