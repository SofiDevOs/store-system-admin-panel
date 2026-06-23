"use client";

import Link from "next/link";
import { useGetEmployee } from "@/hooks/useGetEmployee";
import DataTable from "@/shared/components/DataTable";
import TagStatus from "../components/TagStatus";
import EmployeeHeader from "./components/EmployeeHeader";
import EmployeeCell from "@/shared/components/EmployeeCell";

function Page() {
	// 1. Invocamos nuestro custom hook limpio
	const { employees, isLoading, error } = useGetEmployee();
	console.log(employees);
	const tableMenu = [
		"Empleado",
		"Fecha de ingreso",
		"Departamento",
		"Laborando",
		"Detalles",
	];

	return (
		<>
			<EmployeeHeader />

			{/* 2. Manejo de estado de carga (Feedback para el usuario) */}
			{isLoading && (
				<div className="flex justify-center items-center py-10">
					<p className="text-slate-500 dark:text-slate-400 animate-pulse">
						Cargando empleados...
					</p>
				</div>
			)}

			{/* 3. Manejo de errores de la API */}
			{error && (
				<div className="bg-red-100 text-red-600 p-4 rounded-md my-4">
					<p>Error al cargar los datos: {error}</p>
				</div>
			)}

			{/* 4. Renderizado seguro: Solo mostramos la tabla si hay datos y no hay carga/error */}
			{!isLoading && !error && (
				<DataTable
					// Ya no necesitas 'as Employee[]' porque el hook garantiza que es un Array
					absenceData={employees}
					tableMenu={tableMenu}
				>
					{employees.map((row) => (
						<tr
							key={row.id}
							className="border-b border-slate-300 dark:border-slate-500/30 hover:bg-slate-100 dark:hover:bg-slate-800 py-10 [&>td]:text-slate-700 dark:[&>td]:text-slate-200 [&>td]:min-h-16"
						>
							<td className="p-2">
								<EmployeeCell
									name={row.name}
									lastname={row.lastname}
									profileImage={row.profileImage}
								/>
							</td>
							<td>{row.createdAt}</td>
							<td>{row.department}</td>
							<td>
								<span
									className={`text-xs font-medium me-2 px-4 py-0.5 rounded capitalize w-fit ${
										row.isActive
											? "bg-green-500/30 dark:text-green-200"
											: "bg-red-500/30 dark:text-red-200"
									}`}
								>
									{row.isActive ? "Sí" : "No"}
								</span>
							</td>

							<td>
								<Link
									className="px-2 py-1 bg-violet-500 text-white rounded-md hover:bg-slate-600 transition-colors"
									href={`/dashboard/employees/${row.id}`}
								>
									Detalles
								</Link>
							</td>
						</tr>
					))}
				</DataTable>
			)}
		</>
	);
}

export default Page;
