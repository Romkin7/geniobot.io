import React, { FC, useState, useEffect, useCallback } from 'react';
import { CheckCircleOutline, PauseCircleOutline } from '@material-ui/icons';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IInvoice } from '../../@types';
import Button from '../../Components/Button/Button';

const ShowInvoice: FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [invoices, setInvoices] = useState<IInvoice[] | null>(null);
	const [invoice, setInvoice] = useState<IInvoice>({
		invoiceNumber: '',
		id: 0,
		dueDate: '',
		paymentDate: '',
		sum: 0,
		paid: false,
		createdAt: '',
	});
	const { id }: { id: string } = useParams();

	const findInvoice = useCallback(() => {
		const foundInvoice = invoices?.find((invoiceInFind: IInvoice) => invoiceInFind.id === Number(id)) as IInvoice;
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

	const { invoiceNumber, createdAt, paymentDate, dueDate, sum, paid } = invoice as IInvoice;
	return (
		<>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<section className="singleinv">
					<h1 className="singleinv__heading">Invoice: {invoiceNumber}</h1>
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
						<Button type="button" variant="button__openpdf" handleClick={() => {}}>
							<img
								src="https://res.cloudinary.com/geniobot-io/image/upload/v1626003726/open_button_glnjsk.png"
								alt="pdf icon with gradient"
							/>
						</Button>
					</div>
					<Button variant={`button__payonline ${paid ? 'button__payonline--paid' : ''}`} type="button" handleClick={() => {}}>
						Pay online
					</Button>
				</section>
			)}
		</>
	);
};
export default ShowInvoice;
