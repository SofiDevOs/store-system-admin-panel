
import AbsenseTable from "../components/sections/AbsenseTable";
import absenceData from "../dummyData/employee.json";
import Image from "next/image";
import TagStatus from "../components/TagStatus";
import type { AbsenceEmployee } from "@/types/absenceEmployee.type";
import { Status } from "@/types/status.type";
import Link from "next/link";
import EmployeeHeader from "./components/EmployeeHeader";

const page = () => {


	const tableMenu = ["Empleado", "Fecha de ingreso", "Horario"  ,"Estatus", "Editar"];
	return (
		<>
      <EmployeeHeader/>
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
								/>
								{row.name}
							</td>
						)}
            <td>{row.date}</td>
            <td>{row.reason}</td>
							<td>
								<TagStatus status={row.status as Status} />
							</td>
              <td>
                <Link
                className="px-2 py-1 bg-slate-500 rounded-md"
                href={`/employees/${row.id}`}>Detalles</Link>
              </td>
					</tr>
				))}
			</AbsenseTable>
		</>
	);
};

export default page;
