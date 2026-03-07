"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
	labels: [
		"Asistencias",
		"Faltas injustificadas",
		"Descansos",
		"Incapacidades",
	],
	datasets: [
		{
			label: "Empleados",
			data: [12, 5, 6, 0],
			backgroundColor: [
				"rgba(73, 230, 41, 0.2)",
				"rgba(235, 54, 54, 0.2)",
				"rgba(154, 86, 255, 0.2)",
				"rgba(248, 211, 24, 0.2)",
			],
			borderColor: [
				"rgba(73, 230, 41, 1)",
				"rgba(235, 54, 54, 1)",
				"rgba(154, 86, 255, 1)",
				"rgba(248, 211, 24, 1)",
			],
			borderWidth: 1,
		},
	],
};
const options = {
	responsive: true,
	maintainAspectRatio: false,
};
const EmployeeStats = () => {
	return (
		<div className="h-full">
			<Pie options={options} data={data} />
		</div>
	);
};

export default EmployeeStats;
