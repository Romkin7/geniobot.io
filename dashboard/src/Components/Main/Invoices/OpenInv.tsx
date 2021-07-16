import React, { FC, useEffect, useState } from 'react';
import { CheckCircleOutline, PauseCircleOutline } from '@material-ui/icons';
import axios from 'axios';
import { useParams, useHistory, useLocation } from 'react-router-dom';
import { InvoiceData } from '../../../@types/index.d';
/* console.log({}==true); */
const OpenInv: FC = () => {
	const [invdata, setInvdata] = useState<InvoiceData | null>(null);
	let { id } = useParams<any>();
	let location: any = useLocation();
	console.log(location);

	useEffect(() => {
		if (!invdata) {
			axios.get('http://localhost:3010/invoices/' + location.state.id).then((res) => setInvdata(res.data));
		}
	});

	return (
		<>
			{!invdata ? (
				<h1>Loading...</h1>
			) : (
				<section id="singleinv">
					<h4>Invoice: {invdata.number}</h4>
					<div className="invdata">
						<div className="inv-names">
							<p>Status:</p>
							<p>Invoice date:</p>
							<p>Payment date:</p>
							<p>Due date:</p>
							<p>Sum:</p>
						</div>
						<div className="data">
							<p>
								{invdata.status ? (
									<CheckCircleOutline className="center-line green" />
								) : (
									<PauseCircleOutline className="center-line red" />
								)}
								{/* <CheckCircleOutline className={`center-line ${invdata.status ? 'red' : 'green'}`} /> */}
								{invdata.status}
							</p>
							<p>{invdata.invdate}</p>
							<p>{invdata.paymentdate}</p>
							<p>{invdata.duedate}</p>
							<p>{invdata.sum}€</p>
						</div>
						<button id="open">
							<img
								src="https://res.cloudinary.com/geniobot-io/image/upload/v1626003726/open_button_glnjsk.png"
								alt="pdf icon with gradient"
							/>
						</button>
					</div>

					<button className={`pay ${invdata.status ? 'not-paid' : ''}`}>Pay online</button>
				</section>
			)}
		</>
	);
};
export default OpenInv;
