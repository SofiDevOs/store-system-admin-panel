import React from "react";
import DashboardCard from "./DashboardCard";
import "../../styles/dashboard-grid.css";
import SalesPerDay from "../SalesPerDay";
import EmployeeStats from "../EmployeeStats";
import {Schedule} from  './Schedule';



export const BasicStats = () => {
	return (
		<>
			<section className="stats-grid w-full">
				<DashboardCard className="[grid-area:el-1]" title="Ventas del dia">
					<SalesPerDay />
				</DashboardCard>
				<DashboardCard className="[grid-area:el-2]" title="Empleados Activos">
					<EmployeeStats/>
				</DashboardCard>
				<DashboardCard className='[grid-area:el-3] items-center p-0' >
					<Schedule className="bg-slate-900"/>
				</DashboardCard>
			</section>
		</>
	);
};