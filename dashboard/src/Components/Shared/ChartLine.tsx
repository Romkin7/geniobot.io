import React, { FC, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

/* const stateex = {
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
}; */

interface ChartLineProps {
	labels?: string[];
	datasets?: {
		label?: string;
		fill?: boolean;
		lineTension?: number;
		backgroundColor?: string;
		borderColor?: string;
		borderWidth?: number;
		data?: number[];
	}[];
}

const ChartLine: FC = () => {
	const [chartstate, setChartState] = useState<ChartLineProps>({});

	useEffect(() => {
		let chartmonths: string[] = [];
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
		chartmonths = chartmonthend.concat(chartmonthstart);

		setChartState({
			labels: chartmonths,
			datasets: [
				{
					label: 'Interactions',
					fill: false,
					lineTension: 0.5,
					backgroundColor: 'rgba(35, 219, 189, 1)',
					borderColor: 'rgba(255, 184, 1, 1)',

					borderWidth: 2,
					data: [65, 59, 80, 120, 56, 45, 7, 87, 91, 40],
				},
			],
		});
	}, []);

	return (
		<div>
			<Line
				type={'line'}
				data={chartstate}
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
