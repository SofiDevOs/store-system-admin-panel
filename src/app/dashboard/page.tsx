import React from "react";
import { BasicStats } from "./components/sections/BasicStats";
import absenceData from "./dummyData/employee.json";

import DataTable from "@/shared/components/DataTable";
import type { AbsenceEmployee } from "@/types/absenceEmployee.type";
import { Status } from "@/types/status.type";

import Image from "next/image";
import TagStatus from "./components/TagStatus";

const page = () => {
	const columns: { field: keyof AbsenceEmployee }[] = [
		{ field: "date" },
		{ field: "reason" },
	];
	const tableMenu = ["Empleado", "Fecha", "Razon", "Estatus", "Acciones"];
	return (
		<>
			<BasicStats />
			<DataTable
				absenceData={absenceData as AbsenceEmployee[]}
				tableMenu={tableMenu}
			>
				{absenceData.map((row) => (
					<tr
						key={row.id}
						className=" border-b border-slate-300 dark:border-violet-500/30 hover:bg-violet-100 dark:hover:bg-violet-600/30  py-10 [&>td]:text-slate-700 dark:[&>td]:text-slate-200 [&>td]:min-h-16"
					>
						{row.profilePicture && row.name && (
							<td className="p-2 flex items-center gap-3  ">
								<Image
									className="rounded-full border-2 border-violet-500 "
									width={30}
									height={30}
									src={row.profilePicture}
									alt={row.name}
								/>{" "}
								{row.name}
							</td>
						)}
						{columns.map((col) => (
							<td key={col.field}>{row[col.field]}</td>
						))}
						{row.status && (
							<td>
								<TagStatus status={row.status as Status} />
							</td>
						)}
						<td>
							<button className="px-3 py-1 rounded text-violet-100 font-bold bg-violet-600 dark:bg-violet-600 text-sm">
								Ver detalles
							</button>
						</td>
					</tr>
				))}
			</DataTable>
		</>
	);
};

export default page;
