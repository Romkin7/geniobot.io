import React, { FC, useState } from 'react';
import { CheckCircleOutline } from '@material-ui/icons';

interface OpenInvProps {
	number: number;
	status: string;
	invdate: string;
	paymentdate: string;
	duedate: string;
	sum: number;
	id: number;
}

const OpenInv: FC = () => {
	const [invdata, setInvdata] = useState<OpenInvProps>({
		number: 987654321,
		status: 'Open',
		invdate: '05.07.2021',
		paymentdate: '10.07.2021',
		duedate: '15.07.2021',
		sum: 50,
		id: 1,
	});

	/* const [showpaybutton, setShowpaybutton] = useState<boolean>(false);

	if (invdata.status === 'Open') {
		setShowpaybutton(true);
	} else {
		setShowpaybutton(false);
	} */

	return (
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
						<CheckCircleOutline className={`center-line ${invdata.status === 'Open' ? 'red' : 'green'}`} />
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

			{/* {showpaybutton && <button id="pay">Pay online</button>} */}
		</section>
	);
};

export default OpenInv;
