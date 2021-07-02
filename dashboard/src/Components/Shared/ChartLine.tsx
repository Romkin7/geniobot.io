import React, { FC, useState } from 'react';
import { Line } from 'react-chartjs-2';

const stateex = {
	labels: ['January', 'February', 'March', 'April', 'May'],
	datasets: [
		{
			label: 'Interactions',
			fill: false,
			lineTension: 0.5,
			backgroundColor: 'rgba(35, 219, 189, 1)',
			borderColor: 'rgba(255, 184, 1, 1)',

			borderWidth: 2,
			data: [65, 59, 80, 120, 56],
		},
	],
};

const ChartLine: FC = () => {
	const [state, setState] = useState({});

	const findmonth = () => {
		/* const currentdate = new Date(); */
		/* const currentmonth = month[currentdate.getMonth()]; */
		const month = ['Jan', 'Feb', 'March', 'Apr', 'May', 'June', 'July', 'August', 'Sept', 'Oct', 'Nov', 'Dec'];
		let chartmonthend = [];
		let chartmonthstart = [];
		const history = 9; /*how many months before to show + current month*/
		const startmonth = new Date(new Date().getFullYear(), new Date().getMonth() - history, new Date().getDate()).getMonth();

		const endgap = month.length - startmonth;
		const startgap = history - endgap;

		for (let i = startmonth; i < month.length; i++) {
			chartmonthend.push(month[i]);
		}

		for (let i = 0; i < startgap + 1; i++) {
			chartmonthstart.push(month[i]);
		}
		let chartmonths = chartmonthend.concat(chartmonthstart);
		console.log(chartmonths);
	};
	return (
		<div>
			<Line
				type={'line'}
				data={stateex}
				options={{
					title: {
						display: true,
						text: 'Monthly interactions',
						fontSize: 20,
					},
					legend: {
						display: true,
						position: 'right',
						padding: 20,
						boxwidth: 100,
					},
				}}
			/>
		</div>
	);
};

export default ChartLine;
