import React from "react";
import DashboardCard from "./DashboardCard";
import "../../styles/dashboard-grid.css";
import SalesPerDay from "../SalesPerDay";


export const BasicStats = () => {
	return (
		<>
			<section className="stats-grid w-full">
				<DashboardCard gridEl="el-1" title="Ventas del dia">
					<SalesPerDay />
				</DashboardCard>
				<DashboardCard gridEl="el-2" title="Faltas injustificadas">
					<p>patata</p>
				</DashboardCard>
				<DashboardCard gridEl="el-3" title="Empleados Activos">
					<h2>Empleados activos</h2>
				</DashboardCard>
				<DashboardCard gridEl="el-4" title="Descansos">
					<h2>Descansos</h2>
				</DashboardCard>
			</section>
		</>
	);
};