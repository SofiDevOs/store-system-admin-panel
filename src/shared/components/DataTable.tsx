import { Employee } from "@/types/raw/employee.raw.type";
import { AbsenceEmployee} from "@/types/absenceEmployee.type";

interface Props {
	absenceData: Employee[] | AbsenceEmployee[];
	tableMenu: string[];
	children?: React.ReactNode;
}

const DataTable = ({  tableMenu,   children }: Props) => {
	return (
		<div className="bg-white dark:bg-slate-900 border border-slate-400/30 dark:border-slate-500/30  rounded-xl p-4 w-full  ">
			<table className="table-auto md:table-fixed border-collapse w-full min-h-fit ">
				<thead className="border-b border-slate-300 dark:border-slate-500/30">
					<tr className="py-4">
						{tableMenu.map((col) => (
							<th
								align="left"
								className="py-4 text-slate-700 dark:text-slate-200"
								key={col}
							>
								{col}
							</th>
						))}
					</tr>
				</thead>
				<tbody className="h-full min-h-fit">{children}</tbody>
			</table>
		</div>
	);
};

export default DataTable;
