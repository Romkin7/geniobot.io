import React, { FC, useState, useEffect, useCallback } from 'react';
import { CheckCircleOutline, PauseCircleOutline } from '@material-ui/icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Invoice } from '../../@types';

const ShowInvoice: FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [invoices, setInvoices] = useState<Invoice[] | null>(null);
	const [invoice, setInvoice] = useState<Invoice>({ number: 0, id: 0, dueDate: '', paymentDate: '', sum: 0, paid: false, createdAt: '' });
	const { id }: { id: string } = useParams();

	const findInvoice = useCallback(() => {
		const foundInvoice = invoices?.find((invoiceInFind: Invoice) => invoiceInFind.id === Number(id)) as Invoice;
		setInvoice(foundInvoice);
		setLoading(false);
	}, [invoices, id, setLoading]);

	useEffect(() => {
		if (!invoices) {
			axios.get('/invoices.json').then((res: any) => {
				setInvoices(res.data.invoices);
			});
		} else {
			findInvoice();
		}
	}, [setInvoices, invoices, findInvoice, setLoading]);

	const { number, createdAt, paymentDate, dueDate, sum, paid } = invoice as Invoice;
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<section className="singleinv">
					<h1 className="singleinv__heading">Invoice: {number}</h1>
					<div className="singleinv__invdata">
						<div className="singleinv__invdata__names">
							<p className="singleinv__invdata__names__p">Status:</p>
							<p className="singleinv__invdata__names__p">Invoice date:</p>
							<p className="singleinv__invdata__names__p">Payment date:</p>
							<p className="singleinv__invdata__names__p">Due date:</p>
							<p className="singleinv__invdata__names__p">Sum:</p>
						</div>
						<div className="singleinv__invdata__data">
							<p className="singleinv__invdata__data__p">
								{paid ? (
									<CheckCircleOutline className="singleinv__invdata__data__icon singleinv__invdata__data__icon--green" />
								) : (
									<PauseCircleOutline className="singleinv__invdata__data__icon singleinv__invdata__data__icon--red" />
								)}
								{/* <CheckCircleOutline className={`center-line ${status ? 'red' : 'green'}`} /> */}
								{paid}
							</p>
							<p className="singleinv__invdata__data__p">{createdAt}</p>
							<p className="singleinv__invdata__data__p">{paymentDate}</p>
							<p className="singleinv__invdata__data__p">{dueDate}</p>
							<p className="singleinv__invdata__data__p">{sum}€</p>
						</div>
						<button className="button__openpdf">
							<img
								src="https://res.cloudinary.com/geniobot-io/image/upload/v1626003726/open_button_glnjsk.png"
								alt="pdf icon with gradient"
							/>
						</button>
					</div>

					<button className={`button__payonline ${paid ? 'button__payonline--paid' : ''}`}>Pay online</button>
				</section>
			)}
		</>
	);
};
export default ShowInvoice;
