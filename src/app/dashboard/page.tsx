import React from "react";
import { BasicStats } from "./components/sections/BasicStats";
import absenceData from "./dummyData/employee.json";

import AbsenseTable from "./components/sections/AbsenseTable";
// import employee from "./dummyData/employee.json";
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
      <AbsenseTable
				absenceData={absenceData as AbsenceEmployee[]}

				tableMenu={tableMenu}
			>
				{absenceData.map((row) => (
					<tr
						key={row.id}
						className=" border-b border-slate-500/30 dark:border-slate-500/30 hover:bg-slate-500/20 dark:hover:bg-slate-800  py-10 [&>td]:text-slate-300 dark:[&>td]:text-slate-200 [&>td]:min-h-16"
					>
						{row.profilePicture && row.name && (
							<td className="p-2 flex items-center gap-3  ">
								<Image
									className="rounded-full border-2 border-white/60 "
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
							<button className="px-3 py-1 rounded bg-slate-900 dark:bg-slate-600 text-sm">
								Ver detalles
							</button>
						</td>
					</tr>
				))}
			</AbsenseTable>

    </>
  );
};

export default page;
