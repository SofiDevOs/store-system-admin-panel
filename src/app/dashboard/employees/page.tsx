'use client';
import AbsenseTable from "../components/sections/AbsenseTable";
import Image from "next/image";
import TagStatus from "../components/TagStatus";
import { Status } from "@/types/status.type";
import Link from "next/link";
import EmployeeHeader from "./components/EmployeeHeader";
import { apiFetch } from "@/lib/api";
import { Employee } from "@/types/raw/employee.raw.type";
import {useEffect, useState} from "react";

function Page() {
	const [data, setData] = useState<Employee[] | null>(null);

	useEffect(() => {
		const fetchEmployees = async () => {
		try {
			const data = await apiFetch<Employee[]>("/employee", { method: "GET" }) ;
			setData(data);
			console.log(data);
		} catch (error) {
			console.error("Error fetching employees:", error);
		}
	};
		fetchEmployees();
	}, []);



	const tableMenu = ["Empleado", "Fecha de ingreso", "Horario"  ,"Laborando", "Editar"];
	return (
		<>
      <EmployeeHeader/>
			<AbsenseTable
				absenceData={data as Employee[]}
				tableMenu={tableMenu}
			>
				{data?.map((row) => (
					<tr
						key={row.userId}
						className=" border-b border-slate-500/30 dark:border-slate-500/30 hover:bg-slate-500/20 dark:hover:bg-slate-800  py-10 [&>td]:text-slate-300 dark:[&>td]:text-slate-200 [&>td]:min-h-16"
					>
						<td className="p-2 flex items-center gap-3  ">
							<Image
								className="rounded-full border-2 border-white/60 "
								width={30}
								height={30}
								src={row.profileImage || "/gata-salvaje.jpeg"}
								alt={row.name || "Empleado"}
							/>
							{row.name}
						</td>
			            <td>{row.createdAt}</td>
			            <td>{row.department}</td>
						<td>
							<TagStatus status={row.position as Status} />
						</td>
			            <td>
			                <Link
			                className="px-2 py-1 bg-slate-500 rounded-md"
			                href={`/employees/${row.userId}`}>Detalles</Link>
			            </td>
					</tr>
				))}
			</AbsenseTable>
		</>
	);
};

export default Page;
