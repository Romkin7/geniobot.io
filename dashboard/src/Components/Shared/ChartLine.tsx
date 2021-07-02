import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
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

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Line
					type={'line'}
					data={state}
					options={{
						title: {
							display: true,
							text: 'Average Rainfall per month',
							fontSize: 20,
						},
						legend: {
							display: true,
							position: 'right',
						},
					}}
				/>
			</div>
		);
	}
}
